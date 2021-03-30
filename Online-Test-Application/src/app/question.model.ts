//==================================================
// Question Modeling
// - Each question has
//     - an ID (Right now based on Question #)
//     - string containing question
//     - Array of Choices +Answer
//==================================================


export class questionChoices{
    constructor(public choice:string,public id:string){}
}


export class Question{
    constructor (public question:string,public questionId:string,public choices:questionChoices[],public answer:string){}
}