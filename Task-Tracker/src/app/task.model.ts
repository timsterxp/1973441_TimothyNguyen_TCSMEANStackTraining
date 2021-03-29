export class Task{
    constructor(public id:number,public employeeId:string,public name:string,public taskName:string, public deadline:string){}
}

export class TaskList{
    constructor(public listOfTasks:Task[]){}
        
}