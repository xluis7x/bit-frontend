import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginUser } from '../../../services/login';


@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css'
})
export class LogIn {
router = inject(Router);
  toastrService = inject(ToastrService);
  loginUser = inject(LoginUser);

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  handleSignUp () {
    if (this.loginForm.valid) {
      console.log("handle submit: ", this.loginForm.value)
      this.loginUser.loginUser(this.loginForm.value).subscribe( (res:any) => {
        console.log("response: ", res)
        if (res.allOK) {
          this.router.navigateByUrl("/tasks")          
        } else {
          console.log("An error occurred")
        }
      })
    } else {
      console.log("Invalid info")
    }
  }
}
 /* handleSignUp () {
    if (this.loginForm.valid) {
      console.log("handle submit: ", this.loginForm.value)
      this.loginUser.loginUser(this.loginForm.value).subscribe( (res:any) => {
        console.log("response: ", res)
        if (res.allOK) {
          console.log("res: ", res)
          this.router.navigateByUrl("/tasks")          
        } else {
          console.log("An error occurred")
        }
      })
    } else {
      console.log("Invalid info")
    }
  }
}*/
