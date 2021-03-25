import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyAuthGaurd } from './myauthguard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"\login",component:LoginComponent},
  {path:"\signup",component:SignupComponent},
  {path:"\my-portfolio",component:MyPortfolioComponent, canActivate:[MyAuthGaurd]},
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
