import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeRequestsService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getTimeRequests() {
    return this.http.get(`${this.url}/timeRequests`)
  }
}
