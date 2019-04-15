import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.login();
      console.log('change login');
    } else {
      this.auth.logout();
      console.log('change logout');
    }
  }

}
