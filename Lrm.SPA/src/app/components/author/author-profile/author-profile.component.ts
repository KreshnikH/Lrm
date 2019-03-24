import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

  author: any;
  constructor() { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
   this.author = {
    name: 'John Warilow',
    image: '../../../../assets/img/John-Warrillow.jpg',
    shortbio: 'John Warrillow is the founder of The Value Builder System, a company that helps business owners improve the value of their company. John is the author of the bestselling book Built to Sell: Creating a Business That Can Thrive Without You, which was recognized by both Fortune and Inc Magazine as one of the best business books of 2011. Built to Sell has been translated into four languages. John\'s new book, The Automatic Customer: Creating A Subscription Business In Any Industry was released by Random House in February 2015.'
  };
  }

}
