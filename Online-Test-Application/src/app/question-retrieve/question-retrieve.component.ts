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
    let numOfQuestions=0;
    let correctNum=0;
    for (var question of this.questions){
      numOfQuestions++;
     for (var chosen of question.choices){
       let button=document.getElementById(chosen.id.toString()) as HTMLInputElement;
       button.disabled=true;
       if (button!=null)
       if (button.checked){
         if (question.answer==chosen.choice){
          button.className="btn-check btn-primary";
          button.style.borderColor="green";
          let textAnswer=document.getElementById('insertHere'+question.questionId);
          textAnswer.innerHTML+="Right answer";
          console.log("Correct answer!");
          correctNum++;
         }else {
          let textAnswer=document.getElementById(question.questionId+'insertHere');
          textAnswer.innerHTML+="Wrong Answer! The correct answer is " + question.answer ;
          console.log("Wrong Answer!");
         }
     
       }
     }
    }

    let score=(correctNum/numOfQuestions)*100;
    let scoreText=document.getElementById('scoreHere');
    if (score>=80){
      scoreText.innerHTML+="Congrats! You Passed With A Score Of "+score+"%";
    }else{
      scoreText.innerHTML+="Sorry! You Didn't Pass! Your Score Is "+score+"%";
    }
    
  }


}
