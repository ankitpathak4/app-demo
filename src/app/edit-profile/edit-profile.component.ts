import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  mobile = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 1024) { 
      this.mobile = true;
    }
  }
}
