/*
1. You need to add import ReactiveFormsModule in app.module.ts 
    1.1 import { FormsModule, ReactiveFormsModule} from '@angular/forms';
    1.2 imports: [ReactiveFormsModule]
2. Importing the FormControl module in Component : 
    2.1 import {FormControl} from '@angular/forms';
*/
import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.scss']
})
export class FormControlDemoComponent {

name:FormControl = new FormControl('');

SetAge()
{
  this.name.setValue(18); //Update
}

}
