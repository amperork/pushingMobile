import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  issLoggedIn = new BehaviorSubject<boolean>(false);
  userData: any;
  constructor(
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      this.issLoggedIn.next(!!user);
    });
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', null || '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }
  // Login in with email/password
  SignIn(email: any, password: any) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  
  SetUserData(user: any, role: string, additionalInfo: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: role, // Use the role argument
      additionalInfo: additionalInfo || {}, // Use the additionalInfo argument, or an empty object if it's undefined
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  
  
  
  RegisterUser(userData: any) {
    // Utilisez les données d'inscription (userData) pour créer un nouvel utilisateur
    return this.ngFireAuth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((result) => {
        // Ajoutez les données d'utilisateur à Firestore, y compris le rôle et les données supplémentaires
        this.SetUserData(result.user, userData.role, userData.additionalInfo);
  
        return result.user;
      })
      .catch((error) => {
        throw error; // Gérez l'erreur appropriée ou transmettez-la
      });
  }
  
  
  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['login']);
    });
});
}
  // Recover password
  PasswordRecover(passwordResetEmail: any) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.emailVerified !== false ? true : false;
  }

  // Auth providers
AuthLogin(provider: any, role: string, additionalInfo: any) {
  return this.ngFireAuth
    .signInWithPopup(provider)
    .then((result) => {
      if (result.user) {
        // Authentication succeeded, 'result.user' is defined
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        // Create user data object with role and additional info
        const userData: User = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          emailVerified: result.user.emailVerified,
          role: role, // Assign the role here
          additionalInfo: additionalInfo, // Assign the additional info here
        };
        this.SetUserData(result.user, role, additionalInfo);
      } else {
        // User authentication failed, handle this situation
        window.alert('Authentication failed.');
      }
    })
    .catch((error) => {
      window.alert(error);
    });
}

  
  
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}