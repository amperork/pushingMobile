import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.page.html',
  styleUrls: ['./user-dasboard.page.scss'],
})
export class UserDasboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
