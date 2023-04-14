/*
1. Importing FormControl, FormGroup. "import {FormControl,FormGroup} from '@angular/forms';"
*/
import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.scss']
})
export class FormGroupDemoComponent {

  //2.Declare FormGroup
  loginForm:FormGroup = new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
  });

  //4.GetValue
  Submit()
  {
    console.log(this.loginForm.controls["username"].value);  
    console.log(this.loginForm.controls["password"].value);
  }

}
