import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../heroes-page/heroes-page.component';

@Component({
  selector: 'app-heroes-item',
  templateUrl: './heroes-item.component.html',
  styleUrls: ['./heroes-item.component.scss']
})
export class HeroesItemComponent implements OnInit {
  @Input() hero: Hero;
  @Input() string;
  @Output() newArray = new EventEmitter<object[]>(); // 3
  isDisabled = false;
  selectedHeroes = [];
  isHeroPage: boolean;
  btnText = 'Choose hero';
  objectKeys = Object.keys;
  constructor() {
  }

  ngOnInit(): void {
    this.btnText = this.hero.isSelected ? 'Remove' : 'Choose';
    switch (this.string) {
      case ('heroPage'):
        this.isHeroPage = true;
        break;
      case ('userPage'):
        this.isHeroPage = false;
        break;
      default: break;
    }
  }

  chooseHero(): void {
    this.isDisabled = !this.isDisabled;
    this.selectedHeroes.push(this.hero);
    localStorage.setItem('userHero', JSON.stringify(this.hero));
  }

  selectedHero(): void {
    let arr = JSON.parse(localStorage.getItem('selectedHeroes'));
    this.hero.isSelected = !this.hero.isSelected;
    this.btnText = this.hero.isSelected ? 'Remove Hero' : 'Choose Hero';
    arr = arr.map(el => {
      if (el.id === this.hero.id) {
        el = this.hero;
      } else {
        el.isSelected = false;
      }
      return el;
    });
    localStorage.setItem('selectedHeroes', JSON.stringify(arr));
    this.newArray.emit(arr); // 4
    // this.isActive = !this.isActive;
    // this.btnText = this.isActive ? 'Remove hero' : 'Choose hero';
  }
}
