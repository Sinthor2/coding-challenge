import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }

  // simple guard to prevent an unregistered user from viewing the app
  public canLoad(): boolean {
    const isAuth = (localStorage.getItem("auth") === 'true');
    if (isAuth !== true) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}