import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './exit-guard/exit-guard.component';

export interface Hero {
  id: string;
  name: string;
  powerstats: object;
  biography: object;
  appearance: object;
  work: object;
  connections: object;
  image: {
    url: string;
  };
  isSelected: boolean;
}

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit, ComponentCanDeactivate {
  timeOver: boolean;
  searchForm: FormGroup;
  recentSearches = [];
  responseArray = [];
  selectedHeroes: object[] = [];
  heroPage = 'heroPage';

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
    localStorage.removeItem('userHero');
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
    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/search/${this.searchForm.value.inputField}`)
      .subscribe((responseArray: any) => {
        this.responseArray = responseArray.results;
        console.log(this.responseArray);
      });
  }


  changeInput(event): void {
    this.searchForm.get('inputField').setValue(event);

    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/search/${this.searchForm.value.inputField}`)
      .subscribe((responseArray: any) => {
        this.responseArray = responseArray.results;
        console.log(this.responseArray);
      });
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (localStorage.getItem('userHero')) {
      const hero = [JSON.parse(localStorage.getItem('userHero'))];
      hero[0].isSelected = false; // 1
      if (localStorage.getItem('selectedHeroes')) {
        this.selectedHeroes = [...JSON.parse(localStorage.getItem('selectedHeroes')), ...hero];
      } else {
        this.selectedHeroes = [...hero];
      }
      localStorage.setItem('selectedHeroes', JSON.stringify(this.selectedHeroes));
    }
    return true;
  }
}
