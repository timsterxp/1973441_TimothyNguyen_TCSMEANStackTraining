import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAuthGaurd } from './myauthguard';

@NgModule({
  declarations: [
    AppComponent,
    MyPortfolioComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
