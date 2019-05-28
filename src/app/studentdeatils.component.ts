import { Component, OnInit } from '@angular/core';
import { Studentclass } from './studentclass';
import { StudentserviceService } from './studentservice.service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-studentdeatils',
  templateUrl: './studentdeatils.component.html',
  styleUrls: ['./studentdeatils.component.less']
})
export class StudentdeatilsComponent implements OnInit {
  sinfo:Studentclass;
   constructor(private studentservice:StudentserviceService,private activatedroute:ActivatedRoute){
this.activatedroute.params.subscribe(
  params => {
    this.sinfo =  this.studentservice.getstuparents(params["srollno"]);
  }
);
   }

  ngOnInit() {
  }

}
