import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {
  timeOver: boolean;
  searchForm: FormGroup;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      inputField: new FormControl('', [
        Validators.required,
        Validators.pattern(/[^a-z]$/i)
      ])
    });
  }

  ngOnInit(): void {
    if (this.isAliveToken()) {
      this.timeOver = true;
      sessionStorage.setItem('flag', JSON.stringify(this.timeOver));
      this.router.navigate(['/login']);
    }

  }

  isAliveToken(): boolean {
    const currentToken = JSON.parse(sessionStorage.getItem('token'));
    const dateNow = Date.now();
    const loginTime = dateNow - currentToken.expire;
    console.log(currentToken);
    if (loginTime > 500000000000000) {
      return true;
    }
  }

  submit(event): void {
    event.preventDefault();
  }
}
