import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    newUserAcc=new FormGroup({
    first:new FormControl(),
    last:new FormControl(),
    newUser:new FormControl(),
    newPass:new FormControl(),
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  //==================================================
  // Navigate to Login Screen when Clicked
  //==================================================
  goToLogin(){
    this.router.navigate(["login"]);
  }

  //==================================================
  // Creates the new user account and saves it into storage
  //==================================================
  newUser(){
    localStorage.setItem("userAccount",JSON.stringify(this.newUserAcc.value));
    this.goToLogin();
  }

}
