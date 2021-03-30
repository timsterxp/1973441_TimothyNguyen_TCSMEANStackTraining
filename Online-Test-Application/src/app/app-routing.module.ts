import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionRetrieveComponent } from './question-retrieve/question-retrieve.component';

//==================================================
// Navigation and Paths
//==================================================
const routes: Routes = [
  {path:"\home-page",component:HomePageComponent},
  {path:"\question-page",component:QuestionRetrieveComponent},
  {path:"",redirectTo:"\home-page",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
