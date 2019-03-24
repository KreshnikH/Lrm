import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../_services/book.service';
import { BookProfile } from '../../../_models/BookProfile';


@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  books: BookProfile[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
  }



