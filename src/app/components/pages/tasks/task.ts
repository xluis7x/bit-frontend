import { Component, inject, OnInit } from '@angular/core';
import { Tasks } from '../../../services/tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Task {
  private task = inject(Tasks);

  tasks!: any[];

  ngOnInit(): void {
    this.task.getAllTasks().subscribe((res: any) => {
      this.tasks = res.data;
      console.log("tasks: ", this.tasks);
    })
  }
}
