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
    if (currentToken - personToken.expire >= 1000000) {
      this.router.navigate(['/login']);
    }
  }
}
