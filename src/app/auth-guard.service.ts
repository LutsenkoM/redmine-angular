import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService  implements CanActivate {
  // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   if (!this.auth.loggedIn()) {
  //     this.router.navigate(['']);
  //     return false;
  //   }
  //   return true;
  // }

  constructor(private auth: AuthService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!this.auth.isAuth()) {
            this.router.navigate(['']);
        console.log('active false');
            return false;

      } else {
        console.log('active true');
        return true;
      }
  }

}
