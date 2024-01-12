import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
