import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreateUser } from '../../../services/create-user';
@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  router = inject(Router);
  toastrService = inject(ToastrService);
  createUser = inject(CreateUser);

  singUpForm = new FormGroup({
    studentName: new FormControl("", Validators.required),
    studentUser: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    studentImg: new FormControl("", Validators.required),
    study: new FormControl("", Validators.required)
  })

  handleSignUp () {
    if (this.singUpForm.valid) {
      console.log("handle submit: ", this.singUpForm.value)
      this.createUser.createUser(this.singUpForm.value).subscribe( (res:any) => {
        console.log("response: ", res)
        if (res.allOK) {
          this.router.navigateByUrl("/log-in")          
        } else {
          console.log("An error occurred")
        }
      })
    } else {
      console.log("Invalid info")
    }
  }
}

