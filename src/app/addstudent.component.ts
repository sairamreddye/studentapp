import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from './studentservice.service';
import { Studentclass } from './studentclass';
 
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.less']
})
export class AddstudentComponent implements OnInit {
          studentinfo:Studentclass = new Studentclass("",null,"","")
  constructor(private studentservice:StudentserviceService) { }
        savestudent(){
          this.studentservice.addstudent(new Studentclass(this.studentinfo.studentname,this.studentinfo.studentrollno,this.studentinfo.fathername,this.studentinfo.mothername));
          this.studentinfo.studentname="";
          this.studentinfo.studentrollno=null;
          this.studentinfo.fathername="";
          this.studentinfo.mothername="";
        }
  ngOnInit() {
  }

}
