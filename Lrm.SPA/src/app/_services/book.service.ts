import { Injectable } from '@angular/core';
import { BookProfile } from '../_models/BookProfile';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  desc = `Rework shows you a better, faster, easier way to succeed in business. Read it and you'll
know why plans are actually harmful, why you don't need outside investors,and why you're better off
ignoring the competition. The truth is, you need less than you think. You don't need to be a workaholic.
You don't need to staff up. You don't need to waste time on paperwork or meetings. You don't even need
an office. Those are all just excuses. What you really need to do is stop talking and start working.
This book shows you the way. You'll learn how to be more productive, how to get exposure without breaking
the bank, and tons more counterintuitive ideas that will inspire and provoke you. With its straightforward
language and easy-is-better approach, Rework is the perfect playbook for anyone who’s ever dreamed of doing
it on their own. Hardcore entrepreneurs, small-business owners, people stuck in day jobs they hate, victims
of "downsizing," and artists who don’t want to starve anymore will all find valuable guidance in these pages.`;

  books: BookProfile[] = [
    {
      id: 1,
      name: 'Rework',
      author: 'Jason Fried,  David Heinemeier Hansson',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1391275636l/6732019.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    },
    {
      id: 2,
      name: 'Built to Sell: Creating a Business That Can Thrive Without You',
      author: 'John Warrillow',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1311705645l/10075698.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    },
    {
      id: 3,
      name: '1984',
      author: 'George Orwell,  Erich Fromm',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1348990566l/5470.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    },
    {
      id: 4,
      name: 'Rework',
      author: 'Jason Fried,  David Heinemeier Hansson',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1391275636l/6732019.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    },
    {
      id: 5,
      name: 'Built to Sell: Creating a Business That Can Thrive Without You',
      author: 'John Warrillow',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1311705645l/10075698.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    },
    {
      id: 6,
      name: '1984',
      author: 'George Orwell,  Erich Fromm',
      publish_date: 'April 28th 2011',
      publish_place: 'England',
      original_language: 'English',
      no_pages: 430,
      image: 'https://images.gr-assets.com/books/1348990566l/5470.jpg',
      isbn: '9780307463746',
      avg_rating: 4.5,
      objective_rating: 4.4,
      no_rating: 300,
      no_reviews: 100,
      description: this.desc
    }

  ];
  constructor() { }

  getBooks() {
    return this.books;
  }

  getBook(id) {
    return this.books.find(x => x.id === id);
  }
}
