import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  storeTask(task:any){
    this.http.post("http://localhost:3000/listOfTasks",task).subscribe(result=>console.log(result));
  }

  loadTaskDetails(){
   //return this.http.get<Task[]>("/assets/task.json");
    return this.http.get<Task[]>("http://localhost:3000/listOfTasks");
  }

  
}