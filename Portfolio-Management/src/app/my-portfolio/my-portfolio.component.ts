import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }
  addToTable(){
    let userToAdd=this.contactDetails.get("contactName").value;
    let phoneToAdd= this.contactDetails.get("phoneNumber").value;
    let tableToAdd = document.getElementById("insertHere");
    tableToAdd.innerHTML+="<tr style=color:rgba(255,255,255,0.6);'><th>"+ userToAdd +"</th><th>"+phoneToAdd+"</th></tr>";
    this.contactDetails.reset();
  }
}
