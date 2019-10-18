import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  student: any;

  constructor(private service: ProfileService) {
    
   }

  ngOnInit() {
    this.service.getProfile()
      .subscribe(res => {
        this.student = res;
      })
  }

}
