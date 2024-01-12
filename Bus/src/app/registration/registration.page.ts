import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegistrationPage implements OnInit {
  selectedRole: string = 'user'; // Default role
  name: string = ''; // Declare 'name' property
  userOption: string = ''; // Declare 'userOption' property
  email: string = ''; // Declare 'email' property
  password: string = ''; // Declare 'password' property

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  signUp(email: string, password: string, name?: string, userOption?: string) {
    if (this.selectedRole === 'user' && (!name || !userOption)) {
      window.alert('Please fill in all required fields.');
      return;
    }
  
    // Form the registration request based on the role
    let registrationData: any = {
      email: email,
      password: password,
      role: this.selectedRole
    };
  
    if (this.selectedRole === 'user') {
      registrationData['name'] = name;
      registrationData['userOption'] = userOption;
    }
  
    // Ensure 'role' is defined
registrationData['role'] = this.selectedRole;

// Call AuthService to register the user
this.authService
  .RegisterUser(registrationData)
  .then((res) => {
    window.alert('Registration successful! Redirecting to login...');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000);

     // Reset input fields to empty values
     this.email = '';
     this.password = '';
     this.name = '';
     this.userOption = '';
  })

  
  .catch((error) => {
    window.alert(error.message);
  });
  } 
  
}
