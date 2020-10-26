import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PowerUpsService } from '../services/power-ups.service';
import { BattleResult, PowerUps } from '../shared/interfaces';


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit, AfterViewInit {
  selectedHeroes = [];
  userPage = 'userPage';
  isSelected = false;
  btnText = 'Choose';
  displayedColumns: string[] = ['heroName', 'opponentName', 'battleTime', 'battleResult'];
  dataSource: MatTableDataSource<object>;
  dataArray: BattleResult[];
  powerUps: PowerUps[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private powerUpsService: PowerUpsService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('powerUps')) {
      this.powerUps = [...JSON.parse(localStorage.getItem('powerUps'))];
    } else {
      this.powerUps = this.powerUpsService.getPowerUps();
      localStorage.setItem('powerUps', JSON.stringify(this.powerUps));
    }
    this.selectedHeroes = [...JSON.parse(localStorage.getItem('selectedHeroes'))];
    this.dataArray = JSON.parse(localStorage.getItem('battleResult'));
    this.dataSource = new MatTableDataSource(this.dataArray);
  }

  select(): void {
    this.isSelected = !this.isSelected;
    this.btnText = this.isSelected ? 'Remove' : 'Choose';
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  changeArray(event): void { // 7
    this.selectedHeroes = event;
  }
}
