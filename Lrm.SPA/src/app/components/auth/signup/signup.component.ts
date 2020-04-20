import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lrm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
     'username': new FormControl(null, Validators.required),
     'email': new FormControl(null, [Validators.required, Validators.email]),
     'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
     'confirmpassword': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmpassword').value
       ? null : {'mismatch': true};
 }

}
