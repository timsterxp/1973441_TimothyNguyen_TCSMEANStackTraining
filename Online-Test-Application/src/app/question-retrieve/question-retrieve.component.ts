import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-retrieve',
  templateUrl: './question-retrieve.component.html',
  styleUrls: ['./question-retrieve.component.css']
})
export class QuestionRetrieveComponent implements OnInit {

  constructor(public questionService:QuestionService) { }

  questions:Array<Question>=[];

  ngOnInit(): void {
    this.questionService.loadTestQuestions().subscribe(result=>this.questions=result)
  }

}
