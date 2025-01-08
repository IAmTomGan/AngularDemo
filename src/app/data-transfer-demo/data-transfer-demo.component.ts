import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-transfer-demo',
  templateUrl: './data-transfer-demo.component.html',
  styleUrls: ['./data-transfer-demo.component.scss']
})
export class DataTransferDemoComponent {
  //Step1.2:Parent->Child ?
  title: string = 'Data From DataTransferComponet';
  list:Array<number>=[1,2,3];

  //Step 3.2
  @ViewChild('subCom') subCom:any;

  //Step2.2:Child->Parent
  addListFun(num:any)
  {
    this.list.push(num);
  }

  //Step 3.3
  InvoidSubComMethod()
  {
    this.subCom.pushList();
  }

}
