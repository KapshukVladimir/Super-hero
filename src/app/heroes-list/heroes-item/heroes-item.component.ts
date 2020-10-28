import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../shared/interfaces';

@Component({
  selector: 'app-heroes-item',
  templateUrl: './heroes-item.component.html',
  styleUrls: ['./heroes-item.component.scss']
})
export class HeroesItemComponent implements OnInit {
  @Input() hero: Hero;
  @Input() string: string;
  @Input() isButtonShow = true;
  @Output() newArray = new EventEmitter<object[]>();
  isDisabled = false;
  selectedHeroes: object[] = [];
  isHeroPage: boolean;
  btnText = 'Choose hero';

  ngOnInit(): void {
    this.btnText = this.hero.isSelected ? 'Remove' : 'Choose';
    switch (this.string) {
      case ('heroPage'):
        this.isHeroPage = true;
        break;
      case ('userPage'):
        this.isHeroPage = false;
        break;
      default:
        break;
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

    if (!this.hero.isSelected) {
      localStorage.removeItem('selectedHero');
    } else {
      localStorage.setItem('selectedHero', JSON.stringify(this.hero));
    }
    localStorage.setItem('selectedHeroes', JSON.stringify(arr));
    this.newArray.emit(arr);
  }
}
