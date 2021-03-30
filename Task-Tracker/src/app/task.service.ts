import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

//==================================================
// Store tasks into json-server
//==================================================
  storeTask(task:any){
    this.http.post("http://localhost:3000/listOfTasks",task).subscribe(result=>console.log(result));
  }

//==================================================
// Load tasks from json-server
//==================================================
  loadTaskDetails(){
    return this.http.get<Task[]>("http://localhost:3000/listOfTasks");
  }

  
}