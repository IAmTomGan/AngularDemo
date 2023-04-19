import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent
{
  constructor(){} 
  //When Data Change
  ngOnChanges()
  {
    console.log("ngOnChanges()");
  }

  //Invoke Only one time
  ngOnInit()
  {

  }

  onSave()
  {
    console.log("Save Click!");
  }
}
