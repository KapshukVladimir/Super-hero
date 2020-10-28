import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../shared/interfaces';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss']
})
export class HeroInfoPageComponent implements OnInit {
  hero: Hero;
  id: number;
  private subscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/${this.id}`)
      .subscribe((hero: Hero) => {
        this.hero = hero;
      });
    sessionStorage.setItem('flag', JSON.stringify(true));
    this.authService.checkLoginToken();
  }
}
