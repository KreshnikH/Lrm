import { Component, OnInit, Input } from '@angular/core';
import { BookProfile } from '../../../_models/BookProfile';

@Component({
  selector: 'lrm-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  @Input() book: BookProfile;
  constructor() { }

  ngOnInit() {
  }

}
