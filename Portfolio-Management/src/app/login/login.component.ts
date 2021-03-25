import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo=new FormGroup({
    user:new FormControl(),
    pass:new  FormControl()
  });

  msg:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    if (localStorage.getItem("userAccount")!=null){
      let storedAcc = JSON.parse(localStorage.getItem("userAccount"));
      let infoToCheck =  this.loginInfo.value;
      
      if (storedAcc.newUser===infoToCheck.user){
        this.router.navigate(["my-portfolio"]);
      }else {
        this.msg="Incorrect Credentials. Please Try Again.";
      }
    }else {

    }
    }


  signUp(){
    this.router.navigate(["signup"]);
  }

}
