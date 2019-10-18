import { EventCalenderService } from './../services/event-calender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent implements OnInit {
  requests: any;

  constructor(private service: EventCalenderService) { }

  ngOnInit() {
    this.service.getEventCalender()
      .subscribe(res => {
        this.requests = res;
      })
  }

}
