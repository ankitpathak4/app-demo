import { StudentRequestsService } from './../services/student-requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-requests',
  templateUrl: './student-requests.component.html',
  styleUrls: ['./student-requests.component.css']
})
export class StudentRequestsComponent implements OnInit {
  requests: any;

  constructor(private service: StudentRequestsService) { }

  ngOnInit() {
    this.service.getStudentRequests()
      .subscribe(res => {
        this.requests = res;
      })
  }

}
