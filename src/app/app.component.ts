import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'redmine-angular';

  showLogin = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  public clickLogout() {
      this.showLogin = true;
      this.auth.logout();
  }

}
