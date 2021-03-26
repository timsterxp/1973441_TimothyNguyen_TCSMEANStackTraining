import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()                   // pre-defined interface 
export class MyAuthGaurd implements CanActivate {
    constructor(public router:Router) { }

  //==================================================
  // Authguard to prevent access to portfolio if not logged in
  //==================================================
    canActivate(){      //pre-defined methods. 
      let obj = sessionStorage.getItem("verify");
      if(obj!=null){
          return true;
      }else {
          console.log("hello");
          this.router.navigate(["login"]);
          return false;
      }
    }
}