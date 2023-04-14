//1.只对表单数据有效:需要在app.module.ts 里添加 
//2.import { FormsModule } from '@angular/forms';
//3.imports: [FormsModule]
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})

export class TwoWayBindingComponent {

name:string | undefined;  //name="";

}
