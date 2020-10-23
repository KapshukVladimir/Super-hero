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
  powerUps: any[];

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
    this.powerUps = [
      {
        name: 'Captain America Shield',
        type: 'Durability',
        amount: 10,
        count: 5,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Captain_America%27s_shield.svg/450px-Captain_America%27s_shield.svg.png'
      },
      {
        name: 'Mjolnir ',
        type: 'Power',
        amount: 10,
        count: 5,
        imgUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0f5493a53931d684d7180786faea33c30036febd_full.jpg'
      },
      {
        name: 'Iron man nano armor',
        type: 'Combat',
        amount: 10,
        count: 5,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61IPp1X2Y%2BL._AC_SY879_.jpg'
      },
      {
        name: 'Dr. Strange\'s cloak',
        type: 'Intelligence',
        amount: 10,
        count: 5,
        imgUrl: 'https://vignette.wikia.nocookie.net/marvel/images/a/a1/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%9E%D0%BA%D0%BE_%D0%90%D0%B3%D0%B0%D0%BC%D0%BE%D1%82%D1%82%D0%BE.png/revision/latest/window-crop/width/200/x-offset/561/y-offset/0/window-width/801/window-height/800?cb=20180708190659&path-prefix=ru'
      },
      {
        name: 'Green lantern\'s ring',
        type: 'Strength',
        amount: 10,
        count: 5,
        imgUrl: 'https://www.superherorings.com/image/catalog/Green_Lantern_Ring_Snake.jpg'
      },
      {
        name: 'Flesh boots',
        type: 'Speed',
        amount: 10,
        count: 5,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71jI09v6zjL._AC_UL1500_.jpg'
      }
    ];
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
    this.dataSource = [...this.sortField(this.dataSource, 'position', this.direction)];
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    console.log(this.dataSource);
  }

  sortByOpponent(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'name', this.direction)];
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  sortByBattleDate(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'weight', this.direction)];
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

  sortByResult(): void {
    this.dataSource = [...this.sortField(this.dataSource, 'symbol', this.direction)];
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

}
