import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private userService: UserService) { }

  edituserForm: FormGroup;
  ngOnInit() {
    this.edituserForm = new FormGroup({
     'firstname': new FormControl('John', Validators.required),
     'lastname': new FormControl('Bolton', Validators.required),
     'email': new FormControl('Johnas@hotmail.com', Validators.email),
     'username': new FormControl('Johnas', Validators.required),
     'age': new FormControl('30', Validators.required),
     'gender': new FormControl('Male', Validators.required)
    });
  }

  onSave(form: FormGroup) {
    this.userService.updateCurrentUser(form.value).subscribe(data => {
      console.log(form.value);
    });

  }

}
