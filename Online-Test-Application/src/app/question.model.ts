//==================================================
// Question Modeling
// - Each question has
//     - an ID (Right now based on Question #)
//     - string containing question
//     - Array of Choices +Answer
//==================================================


export class questionChoices{
    constructor(public choice:string,public id:number, public answer:number){}
}


export class Question{
    constructor (public question:string,public questionId:number,public choices:questionChoices[]){}
}