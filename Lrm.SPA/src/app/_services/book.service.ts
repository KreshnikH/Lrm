import { Injectable } from '@angular/core';
import { BookProfile } from '../_models/BookProfile';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {GLOBAL} from '../../environments/global';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public url: string;
  books: BookProfile[];

  constructor(private http: HttpClient) {
    this.url = GLOBAL.mock_url;
   }

  getBooks() {
    return this.http.get<BookProfile[]>(`${this.url}/books`);
  }

  getBook(id) {
    return this.http.get<BookProfile>(`${this.url}/books/` + id);
  }

  getNewReleases() {
    return this.http.get<any>(`${this.url}/newreleases/`);
  }
}
