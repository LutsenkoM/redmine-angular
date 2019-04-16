import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {}

  isAuth() {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['projects']);
  }

  logout() {
    this.isLoggedIn = false;
      this.router.navigate(['']);
  }
}
