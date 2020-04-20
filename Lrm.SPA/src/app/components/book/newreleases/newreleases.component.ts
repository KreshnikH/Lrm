import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { Identity } from '../../../_models/Identity';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BookService } from '../../../_services/book.service';

@Component({
  selector: 'lrm-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.scss']
})
export class NewreleasesComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  identity: Identity;
  identitySubscription: Subscription;
  release_books = [];
  constructor(private userService: UserService, private router: Router, private bookService: BookService) {
    this.identitySubscription = this.userService.identity.subscribe(user => {
      this.identity = user;
    });
  }

  ngOnInit() {
    this.bookService.getNewReleases().subscribe(
      data => { this.release_books = data; }
    );
  }

  ngOnDestroy() {
    this.identitySubscription.unsubscribe();
  }
}
