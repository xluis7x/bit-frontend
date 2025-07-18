import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tasks {
  createTask(value: any) {
    throw new Error('Method not implemented.');
  }
  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:4000/tasks";

  getAllTasks(){
    return this.httpClient.get(this.apiUrl)
  }

  createNewTask(task: any) {
  return this.httpClient.post(this.apiUrl, task);
  }

  editTask(id: string, task: any) {
  return this.httpClient.put(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string) {
  return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
