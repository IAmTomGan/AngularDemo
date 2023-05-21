import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { HelloComponent } from './hello/hello.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { RouteDemoComponent } from './route-demo/route-demo.component';
import { ErrorDefaultPageComponent } from './error-default-page/error-default-page.component';
import { HomeComponent } from './home/home.component';
import { DataTransferDemoComponent } from './data-transfer-demo/data-transfer-demo.component';
import { DataTransferSubDemoComponent } from './data-transfer-sub-demo/data-transfer-sub-demo.component';
import { TempTaskDemoComponent } from './temp-task-demo/temp-task-demo.component';
import { ListService } from './servises/list.service';
//DemoInjectable step 2
import { InjectAbleDemoComponent } from './inject-able-demo/inject-able-demo.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TwoWayBindingComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    RouteDemoComponent,
    ErrorDefaultPageComponent,
    HomeComponent,
    DataTransferDemoComponent,
    DataTransferSubDemoComponent,
    TempTaskDemoComponent,
    InjectAbleDemoComponent,
    TopBarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ListService],//DemoInjectable step 3
  bootstrap: [AppComponent]
})
export class AppModule { }
