import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  tasks:Array<Task>=[];

  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
  this.taskSer.loadTaskDetails().subscribe(result=>this.tasks=result,error=>console.log(error));
  }

//==================================================
// Take information from TDF and store into json
//==================================================
  storeNewTask(taskRef:any){
    console.log(taskRef);
    console.log(this.tasks);
    this.taskSer.storeTask(taskRef);

  }

//==================================================
// Used to display names in the mat-table
//==================================================
  displayedColumns = ['Employee Id', 'Name', 'Task', 'Deadline'];

}

