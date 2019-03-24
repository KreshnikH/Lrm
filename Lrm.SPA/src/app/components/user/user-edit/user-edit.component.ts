import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor() { }

  edituserForm: FormGroup;
  ngOnInit() {
    this.edituserForm = new FormGroup({
     'username': new FormControl('Johnas', Validators.required),
     'age': new FormControl('30', Validators.required),
     'gender': new FormControl('Male', Validators.required),
     'city': new FormControl('London', Validators.required),
     'country': new FormControl('UK', Validators.required)
    });
  }

  onSave(form: FormGroup) {
    console.log(form.value);
  }

}
