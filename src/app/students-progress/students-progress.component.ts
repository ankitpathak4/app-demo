import { StudentsProgressService } from './../services/students-progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-progress',
  templateUrl: './students-progress.component.html',
  styleUrls: ['./students-progress.component.css']
})
export class StudentsProgressComponent implements OnInit {
  students: any;

  constructor(private service: StudentsProgressService) { }

  ngOnInit() {
    this.service.getStudentsProgress()
      .subscribe(res => {
        this.students = res;
      })
  }

}
