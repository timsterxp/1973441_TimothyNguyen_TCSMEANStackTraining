
export class questionChoices{
    constructor(public choice:string,public id:number, public answer:number){}
}


export class Question{
    constructor (public question:string,public choices:questionChoices[]){}
}