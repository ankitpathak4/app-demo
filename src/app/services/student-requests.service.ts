import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestsService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getStudentRequests() {
    return this.http.get(`${this.url}/studentRequests`);
  }
}
