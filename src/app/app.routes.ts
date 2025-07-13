import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Task } from './components/pages/tasks/task';
import { SignUp } from './components/pages/sign-up/sign-up';
import { LogIn } from './components/pages/log-in/log-in';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path: "home", component: Home, title: "Home | StudyFlow"},
    {path: "tasks", component: Task, title: "Your Tasks | StudyFlow"},
    {path: "sign-up", component: SignUp, title: "Sing Up | StudyFlow"},
    {path: "log-in", component: LogIn, title: "Log In | StudyFlow"},
    {path: "", redirectTo: "/home", pathMatch: 'full'},
    {path: "**", component: PageNotFound, title: "Error 404 | StudyFlow"}
];
