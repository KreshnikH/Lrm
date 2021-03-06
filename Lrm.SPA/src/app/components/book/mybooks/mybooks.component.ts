import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../_services/book.service';
import { BookProfile } from '../../../_models/BookProfile';


@Component({
  selector: 'lrm-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  books: BookProfile[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data; }
    );
  }
}



