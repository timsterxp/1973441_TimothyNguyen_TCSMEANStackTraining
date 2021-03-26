import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAuthGaurd } from '../myauthguard';

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
  constructor(public router:Router,public authService:MyAuthGaurd) { }

  ngOnInit(): void {
    this.pullUserName();
  }

  //==================================================
  // Grabs information from the form and places it into the table. 
  //Resets form afterwards
  //==================================================
  addToTable(){
    let userToAdd=this.contactDetails.get("contactName").value;
    let phoneToAdd= this.contactDetails.get("phoneNumber").value;
    let tableToAdd = document.getElementById("insertHere");
    tableToAdd.innerHTML+="<tr style=color:rgba(255,255,255,0.6);'><th>"+ userToAdd +"</th><th>"+phoneToAdd+"</th></tr>";
    this.contactDetails.reset();
  }

  //==================================================
  // Routing Method to go to Login Page + remove 
  // session token
  //==================================================

  goToLogin(){
    sessionStorage.removeItem("verify");
    this.router.navigate(["login"]);
  }

  //==================================================
  // Gets the current user that is logged in
  //==================================================
  pullUserName(){
    if (localStorage.getItem("userAccount")!=null){
      let storedAcc = JSON.parse(localStorage.getItem("userAccount"));
     
      this.loggedInUser=storedAcc.newUser;
     
  }
}
}