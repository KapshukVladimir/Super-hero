import { Component, OnChanges, OnInit } from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit, OnChanges {
  selectedHeroes = [];
  userPage = 'userPage';
  isSelected = false;
  btnText = 'Choose';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  direction = 'desc';
  dataSource: any[];

  constructor() {
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.selectedHeroes = [...JSON.parse(localStorage.getItem('selectedHeroes'))];
    this.dataSource = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    console.log(this.dataSource);
  }

  select(): void {
    this.isSelected = !this.isSelected;
    this.btnText = this.isSelected ? 'Remove' : 'Choose';
  }

  changeArray(event): void { // 7
    this.selectedHeroes = event;
  }
  sortField(array, property, direction = 'asc'): object[] {
    return array.sort((userA, userB) => {
      if (userA[property] > userB[property]) {
        return direction === 'asc' ? 1 : -1;
      } else if (userA[property] < userB[property]) {
        return direction === 'asc' ? -1 : 1;
      }
    });
  }
  sortByName(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'position', this.direction)]
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    console.log(this.dataSource);
  }

  sortByOpponent(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'name', this.direction)]
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  sortByBattleDate(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'weight', this.direction)]
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  sortByResult(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'symbol', this.direction)]
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }
}
