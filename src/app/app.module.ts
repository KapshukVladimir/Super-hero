import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesItemComponent } from './heroes-list/heroes-item/heroes-item.component';
import { AlphabeticalSelectComponent } from './alphabetical-select/alphabetical-select.component';
import { AlphabeticalItemComponent } from './alphabetical-select/alphabetical-item/alphabetical-item.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ExitGuardComponent } from './heroes-page/exit-guard/exit-guard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { SortPipe } from './shared/pipes/sort.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardItemComponent } from './user-info-page/card-item/card-item.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    CreateNewAccountComponent,
    HeroesPageComponent,
    ModalComponent,
    HeaderComponent,
    HeroesListComponent,
    HeroesItemComponent,
    AlphabeticalSelectComponent,
    AlphabeticalItemComponent,
    UserInfoPageComponent,
    SortPipe,
    CardItemComponent,
    HeroInfoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [ExitGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
