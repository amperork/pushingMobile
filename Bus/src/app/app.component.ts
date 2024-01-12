import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication-service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  issLoggedIn: boolean = false;
  constructor(private authService: AuthenticationService) {
    this.authService.issLoggedIn.subscribe((loggedIn) => {
      this.issLoggedIn = loggedIn;
    });

  }
}
