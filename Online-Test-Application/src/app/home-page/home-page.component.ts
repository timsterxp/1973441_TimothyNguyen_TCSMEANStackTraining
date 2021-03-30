import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

//==================================================
// Router Constructor for Navigation Purposes
//==================================================
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

//==================================================
// Router Navigation for Quiz on Click
//==================================================
  goToQuiz(){
    this.router.navigate(["question-page"]);
  }

}
