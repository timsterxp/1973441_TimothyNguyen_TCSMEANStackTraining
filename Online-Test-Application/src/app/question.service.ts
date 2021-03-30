import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //Connect via HTTPClient for local json files or localhost servers
  constructor(public http:HttpClient) { }


//==================================================
//  Retrieve Test Questions(Used on Component Load)
//==================================================
  loadTestQuestions():Observable<Question[]>{
    return this.http.get<Question[]>("/assets/question.json");
  }
}
