import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { Identity } from '../../../_models/Identity';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.scss']
})
export class NewreleasesComponent implements OnInit {
  isAuth: boolean;
  identity: Identity;
  identitySubscription: Subscription;
  release_books = [{
    name: 'Gingerbread',
    author: 'Helen Oyeyemi',
    image: 'https://images.gr-assets.com/books/1549556368l/40634915.jpg',
    short_desc: 'The prize-winning, bestselling author of Boy, Snow, Bird and What Is Not Yours Is Not Yours returns with a bewitching and inventive novel.'
  },
  {
    name: 'When All Is Said',
    author: 'Anne Griffin',
    image: 'https://images.gr-assets.com/books/1542078980l/39863464.jpg',
    short_desc: 'A tale of a single night. The story of a lifetime. If you had to pick five people to sum up your life, who would they be? If you were to raise a glass to each of them, what would you say? And what would you learn about yourself, when all is said and done?'
  },
  {
    name: 'A Woman Is No Man',
    author: 'Etaf Rum',
    image: 'https://images.gr-assets.com/books/1533072101l/34313931.jpg',
    short_desc: 'Introducing a brave, new Arab-American voice, an unflinching debut novel that takes us inside a world where few of us have been before: the lives of conservative Arab women living in America.'
  },
  {
    name: 'Shout',
    author: 'Laurie Halse Anderson',
    image: 'https://images.gr-assets.com/books/1536542439l/40519259.jpg',
    short_desc: 'A searing poetic memoir and call to action from the bestselling and award-winning author of Speak, Laurie Halse Anderson!'
  },
  {
    name: 'The Age of Light',
    author: 'Whitney Scharer',
    image: 'https://images.gr-assets.com/books/1523892144l/39340193.jpg',
    short_desc: 'A captivating debut novel by Whitney Scharer, The Age of Light tells the story of Vogue model turned renowned photographer Lee Miller, and her search to forge a new identity as an artist after a life spent as a muse.'
  }
];
  constructor(private userService: UserService, private router: Router) {
    this.identitySubscription = this.userService.identity.subscribe(user => {
      this.identity = user;
    });
  }

  ngOnInit() {
  }


}
