import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutschoolComponent } from './aboutschool.component';
import { AddstudentComponent } from './addstudent.component';
import { DisplaystudentsComponent } from './displaystudents.component';
import { StudentdeatilsComponent } from './studentdeatils.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path:"aboutschool",component:AboutschoolComponent},
  {path:"addstudent",component:AddstudentComponent},
  {path:"displaystudent",component:DisplaystudentsComponent},
  {path:"studentdetails/:srollno",component:StudentdeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
  exports: [RouterModule],
  declarations: [AboutschoolComponent, AddstudentComponent, DisplaystudentsComponent, StudentdeatilsComponent]
})
export class AppRoutingModule { }
