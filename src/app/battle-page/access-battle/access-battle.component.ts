import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-access-battle',
  templateUrl: './access-battle.component.html',
  styleUrls: ['./access-battle.component.scss']
})
export class AccessBattleComponent implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return !!localStorage.getItem('selectedHero');
  }
}
