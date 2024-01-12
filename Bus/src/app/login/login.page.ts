import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  logIn(email: any, password: any) {
    this.authService.SignIn(email.value, password.value)
      .then((userCredential) => {
        // Assuming we get the role from the user's profile or a similar method
        const userRole = this.getUserRole(userCredential.user);
        
        this.redirectBasedOnRole(userRole);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  getUserRole(user: any): string {
    // Implement this method to retrieve the user's role
    // For example, this might involve a database call
    // Return the role as a string (e.g., 'admin', 'user', 'manager', etc.)
    return 'user'; // Placeholder return
  }

  redirectBasedOnRole(role: string) {
    // Redirect the user based on their role
    switch(role) {
      case 'admin':
        this.router.navigate(['dashboard']);
        break;
      case 'driver':
        this.router.navigate(['dashboard']);
        break;
      case 'user':
      default:
        this.router.navigate(['dashboard']);
    }
  }
}
