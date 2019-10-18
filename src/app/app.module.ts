import { StudentsProgressService } from './services/students-progress.service';
import { EventCalenderService } from './services/event-calender.service';
import { StudentRequestsService } from './services/student-requests.service';
import { TimeRequestsService } from './services/time-requests.service';
import { ProfileService } from './services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { TimeRequestsComponent } from './time-requests/time-requests.component';
import { EventCalenderComponent } from './event-calender/event-calender.component';
import { StudentsProgressComponent } from './students-progress/students-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentProfileComponent,
    EditProfileComponent,
    StudentRequestsComponent,
    TimeRequestsComponent,
    EventCalenderComponent,
    StudentsProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProfileService,
    TimeRequestsService,
    StudentRequestsService,
    EventCalenderService,
    StudentsProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
