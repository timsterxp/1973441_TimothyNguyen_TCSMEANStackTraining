import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public http:HttpClient) { }

  loadTestQuestions():Observable<Question[]>{
    return this.http.get<Question[]>("/assets/question.json");
  }
}
