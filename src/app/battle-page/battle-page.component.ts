import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BattleResult, Hero, PowerUps } from '../shared/interfaces';
import { AuthService } from '../services/auth.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss']
})
export class BattlePageComponent implements OnInit {
  hero: Hero;
  opponent: Hero;
  isButtonShow = false;
  powerUps: PowerUps[] = [];
  clicked = false;
  isBattle = false;
  win: string;
  battleResult: BattleResult[] = localStorage.getItem('battleResult') ? JSON.parse(localStorage.getItem('battleResult')) : [];
  showModal = false;
  clickable = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.hero = JSON.parse(localStorage.getItem('selectedHero'));
    this.powerUps = JSON.parse(localStorage.getItem('powerUps'));

    if (localStorage.getItem('opponent')) {
      this.opponent = JSON.parse(localStorage.getItem('opponent'));
      this.clicked = !this.clicked;
    }
    this.isBattle = false;
    this.powerUps = this.powerUps.map(el => {
      el.isSelected = false;
      return el;
    });
    localStorage.setItem('powerUps', JSON.stringify(this.powerUps));
    sessionStorage.setItem('flag', JSON.stringify(true));
    this.authService.checkLoginToken();
  }

  randomId(): number {
    return Math.floor((Math.random() * 730) + 1);
  }

  choosePower({name, count, type, amount}: PowerUps): void {
    this.powerUps = [...this.powerUps].map(el => {

      if (el.name === name && count > 0) {
        el.isSelected = !el.isSelected;
        el.count--;
      }
      return el;
    });
    const typeLowerCase = type.toLowerCase();
    this.hero.powerstats[typeLowerCase] = +this.hero.powerstats[typeLowerCase] + amount;
  }

  private createBattleTimer(heroPoints: number, opponentPoints: number): void {
    const source = interval(1000);
    const subscribe = source.subscribe((val: number) => {
      let counterTimer = 4;
      counterTimer -= val;
      this.win = `Battle end after: ${counterTimer}`;

      if (counterTimer === 0) {
        this.win = heroPoints > opponentPoints ? 'You Win' : heroPoints < opponentPoints ? 'You Lose' : 'Draw';
        subscribe.unsubscribe();
        this.clickable = !this.clickable;
      }
    });
    this.isBattle = false;
  }

  startBattle(): void {
    const heroPower = this.hero.powerstats;
    const opponentPower = this.opponent.powerstats;

    const totalHeroPoints = Object.keys(heroPower).reduce((totals, value) => {
      if (heroPower[value] === 'null') {
        totals = 0;
        return totals;
      }
      return totals + +heroPower[value];
    }, 0);
    const totalOpponentPoints = Object.keys(opponentPower)
      .reduce((totals, value) => {
        if (opponentPower[value] === 'null'){
           totals = 0;
           return totals;
        }
        return totals + +opponentPower[value];
      }, 0);

    this.showModal = !this.showModal;
    this.win = `Battle end after: 5`;
    this.createBattleTimer(+totalHeroPoints, +totalOpponentPoints);
    this.isBattle = true;

    if (this.isBattle) {
      localStorage.setItem('powerUps', JSON.stringify(this.powerUps));
    }

    localStorage.removeItem('opponent');
    this.powerUps = this.powerUps.map(el => {
      el.isSelected = false;
      return el;
    });
    localStorage.setItem('powerUps', JSON.stringify(this.powerUps));

    const result: BattleResult = this.createBattleResult(+totalHeroPoints, +totalOpponentPoints);

    this.battleResult = [...this.battleResult, result];
    localStorage.setItem('battleResult', JSON.stringify(this.battleResult));
  }

  private createBattleResult(heroCount: number, opponentCount: number): BattleResult {
    return {
      heroName: this.hero.name,
      opponentName: this.opponent.name,
      battleTime: new Date(),
      battleResult: heroCount > opponentCount ? 'Win' : heroCount < opponentCount ? 'Lose' : 'Draw',
      heroId: this.hero.id,
      opponentId: this.opponent.id,
    };
  }

  findOpponent(): void {
    this.clicked = !this.clicked;
    this.http.get(`https://www.superheroapi.com/api.php/3427464907330752/${this.randomId()}`)
      .subscribe((opponent: Hero) => {
        localStorage.setItem('opponent', JSON.stringify(opponent));
        this.opponent = JSON.parse(localStorage.getItem('opponent'));
      });
  }
}
