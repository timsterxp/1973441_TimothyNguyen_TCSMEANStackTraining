import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-retrieve',
  templateUrl: './question-retrieve.component.html',
  styleUrls: ['./question-retrieve.component.css']
})
export class QuestionRetrieveComponent implements OnInit {
//==================================================
// Question Service For Retrieving Questions
//==================================================
  constructor(public questionService:QuestionService) { }

  //An Array that contains all Questions
  questions:Array<Question>=[];

//==================================================
// Load Questions on Component Load
//==================================================
  ngOnInit(): void {
    this.questionService.loadTestQuestions().subscribe(result=>this.questions=result)
  }

  checkQuestion(){
    let button=document.getElementById("101") as HTMLInputElement;
    if (button.checked)
    console.log("You entered ");


  }


  clickMe(id:string){
    console.log("You clicked me" + id);
  }

}
