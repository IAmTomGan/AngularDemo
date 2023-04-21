
//DemoInjectable step 1: ng g s list
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list:Array<string>=['Angular','Vue','React'];

  getList()
  {
    return this.list;
  }
}
