import { Component, OnInit, Input } from '@angular/core';
import { BookProfile } from '../../../_models/BookProfile';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../_services/book.service';


@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {
  book: BookProfile;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(
      (book) => {
        this.book = book;
      }
    );
  }


}
