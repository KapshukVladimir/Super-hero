import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseArray {
  id: string;
  name: string;
  powerstats: object;
  biography: object;
  appearance: object;
  work: object;
  connections: object;
  image: object;
}

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {
  timeOver: boolean;
  searchForm: FormGroup;
  recentSearches = [];
  responseArray = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
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
    if (loginTime > 5000000000000000000000) {
      return true;
    }
  }

  submit(event): void {
    event.preventDefault();
    this.recentSearches = [...this.recentSearches, this.searchForm.value.inputField];
    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/search/${this.searchForm.value.inputField}`)
      .subscribe((responseArray: any) => {
        this.responseArray = responseArray.results;
        console.log(this.responseArray);
      });

    this.searchForm.reset();
  }

  resentQuery(event, item): void {
    this.searchForm.get('inputField').setValue(item);
  }


  changeInput(event): void {
    this.searchForm.get('inputField').setValue(event);

    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/search/${this.searchForm.value.inputField}`)
      .subscribe((responseArray: any) => {
        this.responseArray = responseArray.results;
        console.log(this.responseArray);
      });
  }
}
