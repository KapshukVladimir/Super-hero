import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { ExitGuardComponent } from './heroes-page/exit-guard/exit-guard.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create-account', component: CreateNewAccountComponent},
  {path: 'heroes-page', component: HeroesPageComponent, canDeactivate: [ExitGuardComponent]},
  {path: 'user-info', component: UserInfoPageComponent},
  {path: 'hero-page/:id', component: HeroInfoPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
