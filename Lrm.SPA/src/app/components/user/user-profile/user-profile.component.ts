import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/User';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'lrm-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser('1').subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  onEditProfile() {
    this.router.navigate(['/user-edit']);
  }

}
