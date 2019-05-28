import { Injectable } from '@angular/core';

import { Studentclass } from './studentclass';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
        stu:Studentclass[] = [
          new Studentclass ("sairamreddy",123,"madhusudhareddy","radhareddy"),
          new Studentclass ("mohanreddy", 45678,"narynarddy","tippanmareddy")
        ]
  constructor() { }
  addstudent(s:Studentclass){
    this.stu.push(s);
  }
  getstudents():Studentclass[]{
      return this.stu;
  }
  getstuparents(srollno:number){
 var stuinfo:Studentclass;
 stuinfo = this.stu.find(s=>s.studentrollno==srollno);
   return stuinfo;
  }
}
