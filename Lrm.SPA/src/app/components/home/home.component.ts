import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Identity } from '../../_models/Identity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  identity: Identity;
  identitySubscription: Subscription;
  constructor(private userService: UserService) {
    this.identitySubscription = this.userService.identity.subscribe(user => {
      this.identity = user;
  });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.identitySubscription.unsubscribe();
}
}
