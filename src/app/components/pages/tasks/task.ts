import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tasks } from '../../../services/tasks';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Component({
  selector: 'app-task',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  standalone: true,
  styleUrl: './tasks.css'
})
export class Task {
  private router = inject(Router);
  private task = inject(Tasks);
  private fb = inject(FormBuilder);

  tasks: any[] = [];
  taskForm: FormGroup;
  taskId: string | null = null;

  constructor() {
    this.taskForm = this.fb.group({
      taskName: ["", Validators.required],
      dueDate: ["", Validators.required],
      relevance: [""],
      completed: [""]
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.task.getAllTasks().subscribe((res: any) => {
      this.tasks = res.data;
      console.log("tasks: ", this.tasks);
    });
  }
  createTask() {
    if (this.taskForm.valid) {
      this.task.createNewTask(this.taskForm.value).subscribe(() => {
        this.getTasks();
        this.taskForm.reset();
      });
    }
  }
  editTask() {
    if (this.taskId && this.taskForm.valid) {
      this.task.editTask(this.taskId, this.taskForm.value).subscribe(() => {
        this.getTasks();
        this.taskForm.reset();
        this.taskId = null;
      });
    }
  }
  selectTask(task: any) {
    this.taskId = task._id;
    this.taskForm.patchValue(task);
  }
  deleteTask(id: string) {
    this.task.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }

  reset() {
    this.taskForm.reset();

  }
}