//Child->Parent1.2  import Output, EvenEmitter
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-transfer-sub-demo',
  templateUrl: './data-transfer-sub-demo.component.html',
  styleUrls: ['./data-transfer-sub-demo.component.scss']
})
export class DataTransferSubDemoComponent {
//Step 1.3:Parent->Child: The role of @Input is to define the module input,
// which is used to let the parent component pass content to the child component
@Input() title?:string

 //Step 2.4:Child -> Parent  : Show the data in Result
  @Output() addListEmit = new EventEmitter();

  pushList()
  {
    //Step 2.5:Child -> Parent  : Show the data in Result
    this.addListEmit.emit(5);
  }
}
