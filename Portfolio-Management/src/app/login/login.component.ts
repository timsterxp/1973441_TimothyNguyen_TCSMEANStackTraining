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


  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    this.router.navigate(["my-portfolio"]);
  }

  signUp(){
    this.router.navigate(["signup"]);
  }

}
