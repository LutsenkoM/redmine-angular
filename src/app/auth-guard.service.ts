import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private auth: AuthService) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!this.auth.isAuth()) {
            console.log('active false');
            return false;

      } else {
        console.log('active true');
        return true;
      }
  }

}
