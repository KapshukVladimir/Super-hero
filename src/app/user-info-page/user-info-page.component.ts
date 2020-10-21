import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {
  selectedHeroes = [];
  userPage = 'userPage';
  isSelected = false;
  btnText = 'Choose';
  constructor() {
  }

  ngOnInit(): void {
    this.selectedHeroes = [...JSON.parse(localStorage.getItem('selectedHeroes'))];
  }

  select(): void {
    this.isSelected = !this.isSelected;
    this.btnText = this.isSelected ? 'Remove' : 'Choose';
  }

  changeArray(event): void { // 7
    this.selectedHeroes = event;
  }
}
