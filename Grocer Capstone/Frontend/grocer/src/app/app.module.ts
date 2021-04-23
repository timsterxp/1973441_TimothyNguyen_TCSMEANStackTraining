import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { UserSigninComponent } from './user-signin/user-signin.component';

import { UserHomeComponent } from './user-home/user-home.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserSigninComponent,

    UserHomeComponent,
    EmpSigninComponent,
    AdminSigninComponent,
    EmpHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
