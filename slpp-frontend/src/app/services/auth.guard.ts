import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      if (typeof window !== 'undefined') {
        alert('Access Denied! Please log in to continue.');
      }
      
      this.router.navigate(['/login']);
      return false;
    }
  }
}
