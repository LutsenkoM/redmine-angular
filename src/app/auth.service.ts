import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  isAuth() {
    return new Promise((resolve) => {
      resolve(this.isLoggedIn);
    });

  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
  constructor() { }
}
