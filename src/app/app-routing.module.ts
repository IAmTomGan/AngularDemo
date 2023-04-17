import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ErrorDefaultPageComponent } from './error-default-page/error-default-page.component';
import { HomeComponent } from './home/home.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
//Configure Route
const routes: Routes = 
[
  {path:'', component:HomeComponent},               //Default page modify
  {path:'home', component:HomeComponent,
    children:[
      {path:'formgroup', component:FormGroupDemoComponent},  //Sub Route
      {path:'formcontrol', component:FormControlDemoComponent},
    ]
  },
  {path:'hello', component:HelloComponent},
  {path:'twowaybinding', component:TwoWayBindingComponent},
  {path:'**', component:ErrorDefaultPageComponent}  //Error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
