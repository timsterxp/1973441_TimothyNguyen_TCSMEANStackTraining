import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
  }

  storeNewTask(taskRef:any){
    console.log(taskRef);
    this.taskSer.storeTask(taskRef);
  }

}
