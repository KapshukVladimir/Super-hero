import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BattleResult, Hero, PowerUps } from '../shared/interfaces';
import { AuthService } from '../services/auth.service';



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
  battleResult: object[] = localStorage.getItem('battleResult') ? JSON.parse(localStorage.getItem('battleResult')) : [];
  showModal = false;

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

  choosePower(event, power: PowerUps): void {
    this.powerUps = [...this.powerUps].map(el => {
      if (el.name === power.name && power.count > 0) {
        el.isSelected = !el.isSelected;
        el.count--;
      }
      return el;
    });
    this.hero.powerstats[power.type.toLowerCase()] = +this.hero.powerstats[power.type.toLowerCase()]
      + power.amount;
  }

  startBattle(): void {
    const heroKeys = Object.keys(this.hero.powerstats);
    let heroPoints = 0;
    let opponentPoints = 0;
    heroKeys.forEach(el => {
      if (+this.hero.powerstats[el] > +this.opponent.powerstats[el] || this.opponent.powerstats[el] === 'null') {
        ++heroPoints;
      } else if (+this.hero.powerstats[el] < +this.opponent.powerstats[el] || this.hero.powerstats[el] === 'null') {
        ++opponentPoints;
      }
    });

    if (heroPoints < opponentPoints) {
      this.win = 'HA-HA You Lose';
    } else if (heroPoints > opponentPoints) {
      this.win = 'Congrats, You Win!';
    } else {
      this.win = 'Oh, it\'s Draw';
    }
    this.showModal = !this.showModal;
    this.isBattle = true;
    if (this.isBattle) {
      localStorage.setItem('powerUps', JSON.stringify(this.powerUps));
    }
    this.isBattle = false;
    localStorage.removeItem('opponent');
    this.powerUps = this.powerUps.map(el => {
      el.isSelected = false;
      return el;
    });
    localStorage.setItem('powerUps', JSON.stringify(this.powerUps));

    const result: BattleResult = {
      heroName: `${this.hero.name}`,
      opponentName: `${this.opponent.name}`,
      battleTime: new Date(),
      battleResult: heroPoints > opponentPoints ? 'Win' : heroPoints < opponentPoints ? 'Lose' : 'Draw',
      heroId: this.hero.id,
      opponentId: this.opponent.id,
    };
    console.log(this.hero.id, this.opponent.id);
    this.battleResult.push(result);
    localStorage.setItem('battleResult', JSON.stringify(this.battleResult));
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
