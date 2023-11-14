import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {
  getstudent: any;

  constructor(public so:StudentService) {
    this.so.getstudent().subscribe((data:any)=>{
      console.log("get return data",data);
      this.getstudent=data
    })

  }

}
