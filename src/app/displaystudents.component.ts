import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from './studentservice.service'
import { Studentclass } from './studentclass';

@Component({
  selector: 'app-displaystudents',
  templateUrl: './displaystudents.component.html',
  styleUrls: ['./displaystudents.component.less']
})
export class DisplaystudentsComponent implements OnInit {

  studentdata:Studentclass[];
  constructor(private studentservice:StudentserviceService) { 
    this.studentdata = this.studentservice.getstudents();
  }

  ngOnInit() {
  }

}
