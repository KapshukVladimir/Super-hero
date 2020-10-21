import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  @Input() responseArray;
  @Input() string;

  constructor() { }

  ngOnInit(): void {
  }

}
