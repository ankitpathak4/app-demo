import { TimeRequestsService } from './../services/time-requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-requests',
  templateUrl: './time-requests.component.html',
  styleUrls: ['./time-requests.component.css']
})
export class TimeRequestsComponent implements OnInit {
  requests: any;

  constructor(private service: TimeRequestsService) { }

  ngOnInit() {

    this.service.getTimeRequests()
      .subscribe(res => {
        this.requests = res;
      })
  }

}
