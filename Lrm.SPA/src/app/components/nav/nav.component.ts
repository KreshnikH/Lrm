import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { Identity } from '../../_models/Identity';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  public user: any;
  identity: Identity;
  token: any;
  identitySubscription: Subscription;
  constructor(private router: Router, private userService: UserService) {
   this.identity = this.userService.getIdentity();
   this.token = this.userService.getToken();
   this.identitySubscription = this.userService.identity.subscribe(user => {
    this.identity = user;
});
  }

  ngOnInit() {
    this.user = {
      'email': '',
      'password': '',
      'getHash': null
    };
  }


  onSubmit() {
    this.user.getHash = null;
    this.userService.login(this.user).pipe(first())
    .subscribe(
        data => {
          this.router.navigate(['/mybooks']);
        },
        error => {
          console.log(<any>error);
        });
    // .subscribe(
    //   response => {
    //     console.log(response);
    //     this.router.navigate(['/mybooks']);
    //     this.identity = response;

    //     if (!this.identity.status) {

    //         localStorage.setItem('identity', JSON.stringify(this.identity));
    //         this.user.getHash = null;
    //         this.userService.login(this.user).subscribe(
    //             res => {
    //                 this.token = res;
    //                 if (!this.identity.status) {
    //                 localStorage.setItem('token', JSON.stringify(this.token));
    //                 this.router.navigate(['/mybooks']);
    //               }
    //             },
    //             error => {
    //               console.log(<any>error);
    //             });
    //     } else  {

    //       if (this.identity.status === 'error') {
    //         console.log('Login Failed!');
    //       } else {
    //           console.log('Unknown error!');
    //       }

    //     }
    //   },
    //   error => {
    //     console.log(<any>error);
    //   });
  }



  logout() {
        this.userService.logout();
        this.router.navigate(['/home']);

  }

  onEditProfile() {
    this.router.navigate(['/user']);
  }

  ngOnDestroy() {
    this.identitySubscription.unsubscribe();
}
}
