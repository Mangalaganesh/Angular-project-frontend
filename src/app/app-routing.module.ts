import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidemainComponent } from './sidemain/sidemain.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'',component:SidemainComponent},
  {path:'form',component:AddstudentComponent},
  {path:'viewstudent',component:ViewstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
