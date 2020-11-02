import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { ExitGuardComponent } from './heroes-page/exit-guard/exit-guard.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { AccessBattleComponent } from './battle-page/access-battle/access-battle.component';
import { AuthGuard } from './login-page/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'create-account', component: CreateNewAccountComponent},
  {path: 'heroes-page', component: HeroesPageComponent, canDeactivate: [ExitGuardComponent], canActivate: [AuthGuard]},
  {path: 'user-info', component: UserInfoPageComponent, canActivate: [AuthGuard]},
  {path: 'hero-page/:id', component: HeroInfoPageComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'battle-page', component: BattlePageComponent, canActivate: [AuthGuard, AccessBattleComponent]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
