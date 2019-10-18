import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(`${this.url}/profile`);
  }
}
