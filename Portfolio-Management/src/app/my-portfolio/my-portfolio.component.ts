import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
  contactDetails = new FormGroup({
    contactName:new FormControl(),
    phoneNumber:new FormControl()
  });
  loggedInUser:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.pullUserName();
  }
  addToTable(){
    let userToAdd=this.contactDetails.get("contactName").value;
    let phoneToAdd= this.contactDetails.get("phoneNumber").value;
    let tableToAdd = document.getElementById("insertHere");
    tableToAdd.innerHTML+="<tr style=color:rgba(255,255,255,0.6);'><th>"+ userToAdd +"</th><th>"+phoneToAdd+"</th></tr>";
    this.contactDetails.reset();
  }
  goToLogin(){
    this.router.navigate(["login"]);
  }
  pullUserName(){
    if (localStorage.getItem("userAccount")!=null){
      let storedAcc = JSON.parse(localStorage.getItem("userAccount"));
     
      this.loggedInUser=storedAcc.newUser;
     
  }
}
}