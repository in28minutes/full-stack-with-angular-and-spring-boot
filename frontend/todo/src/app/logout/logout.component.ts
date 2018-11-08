import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
