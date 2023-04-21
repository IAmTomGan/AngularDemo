import { Component } from '@angular/core';
import { ListService } from '../servises/list.service';//DemoInjectable step 4

@Component({
  selector: 'app-inject-able-demo',
  templateUrl: './inject-able-demo.component.html',
  styleUrls: ['./inject-able-demo.component.scss']
})
export class InjectAbleDemoComponent {

  list:Array<string>|undefined;
  constructor(private lsServer:ListService) //DemoInjectable step 5
  {
  }

  ngOnInit():void
  {
    this.list = this.lsServer.getList(); //DemoInjectable step 6
    console.log(this.list);
  }

}
