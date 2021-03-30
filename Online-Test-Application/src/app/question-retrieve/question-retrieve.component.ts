import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
//==================================================
// Quiz Application Project
// Simplilearn TCS
// Timothy Nguyen
// 1973441
//==================================================

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

//==================================================
// When Clicking Submit, Check Answers For Score
//==================================================
  checkQuestion(){
    //Variables to keep track of score
    let numOfQuestions=0;
    let correctNum=0;

    //Iterate through the questions array which already contains another array
    for (var question of this.questions){
      numOfQuestions++;
     for (var chosen of question.choices){
       //Retrieve button by id
       let button=document.getElementById(chosen.id.toString()) as HTMLInputElement;
       button.disabled=true; //Disable all input when showing answers
       if (button!=null) //Check if Button actually was retrieved
       if (button.checked){ //Check if button is currently the chosen answer

        //If correct answer then display "Correct Answer"
         if (question.answer==chosen.choice){
          let textAnswer=document.getElementById('insertHere'+question.questionId);
          textAnswer.innerHTML+="Correct answer!";
          correctNum++;
         }else {

          //If wrong, display what they answered and the correct answer
          let textAnswer=document.getElementById(question.questionId+'insertHere');
          textAnswer.innerHTML+="Wrong Answer! The correct answer is " + question.answer + " but you answered "+ chosen.choice;
         }
     
       }
     }
    }

    //Calculate Score and Print correct message
    let score=(correctNum/numOfQuestions)*100;
    let scoreText=document.getElementById('scoreHere');
    if (score>=70){
      scoreText.innerHTML+="Congrats! You Passed With A Score Of "+score+"%";
    }else{
      scoreText.innerHTML+="Sorry! You Didn't Pass! Your Score Is "+score+"%";
    }
    
  }


}
