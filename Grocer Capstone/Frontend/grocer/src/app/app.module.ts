import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { AdminOrEmpSigninComponent } from './admin-or-emp-signin/admin-or-emp-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPageComponent,
    EmployeePageComponent,
    UserPageComponent,
    UserSigninComponent,
    AdminOrEmpSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
