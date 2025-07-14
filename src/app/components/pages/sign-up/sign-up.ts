import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateUser } from '../../../services/create-user';
@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  createUser = inject(CreateUser);

  singUpForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    study: new FormControl("", Validators.required)
  })

  handleSignUp () {
    if (this.singUpForm.valid) {
      console.log("handle submit: ", this.singUpForm.value)
      this.createUser.createUser(this.singUpForm.value).subscribe( (res:any) => {
        console.log("response: ", res)
      })
    } else {
      console.log("Invalid info")
    }
  }
}
