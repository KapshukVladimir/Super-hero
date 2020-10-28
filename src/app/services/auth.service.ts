import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = sessionStorage.getItem('flag') ? JSON.parse(sessionStorage.getItem('flag')) : false;
  constructor(private router: Router) { }

  changeStateFlag(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  checkLoginToken(): void {
    const personToken = JSON.parse(sessionStorage.getItem('token'));
    const currentToken = Date.now();
    const ONE_HOUR_IN_MILLISECONDS = 3600000;

    if (currentToken - personToken.expire >= ONE_HOUR_IN_MILLISECONDS) {
      this.router.navigate(['/login']);
    }
  }
}
