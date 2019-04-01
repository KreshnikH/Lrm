import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = {
        id: 1,
        username: 'Johnas',
        email: 'Johnas@hotmail.com',
        firstname: 'John',
        lastname: 'Bolton',
        age: 30,
        gender: 'Male',
        created: 'April 28th 2011',
        lastActive: 'January 28th 2019',
        photoUrl: '../../assets/img/user-1.jpg',
      };
  }

  onEditProfile() {
    this.router.navigate(['/user-edit']);
  }

}
