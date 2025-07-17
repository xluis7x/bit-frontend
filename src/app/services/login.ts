import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginUser {
  constructor() { }

  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:4000/students/login";

  loginUser(body:any) {
    return this.httpClient.post(this.apiUrl, body)
  }
}
