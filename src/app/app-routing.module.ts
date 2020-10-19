import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create-account', component: CreateNewAccountComponent},
  {path: 'heroes-page', component: HeroesPageComponent},
  {path: 'user-info', component: UserInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [AuthGuard]
})
export class AppRoutingModule { }
