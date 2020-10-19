import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-item',
  templateUrl: './heroes-item.component.html',
  styleUrls: ['./heroes-item.component.scss']
})
export class HeroesItemComponent implements OnInit {
  @Input() hero;
  isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  chooseHero(): void {
    this.isDisabled = !this.isDisabled;
    localStorage.setItem('userHero', JSON.stringify(this.hero));
  }
}
