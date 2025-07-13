import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tasks {
  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:4000/tasks";

  getAllTasks(){
    return this.httpClient.get(this.apiUrl)
  }
}
