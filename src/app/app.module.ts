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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }