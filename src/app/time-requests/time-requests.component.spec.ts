import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRequestsComponent } from './time-requests.component';

describe('TimeRequestsComponent', () => {
  let component: TimeRequestsComponent;
  let fixture: ComponentFixture<TimeRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
