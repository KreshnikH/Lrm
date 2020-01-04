import { Injectable } from '@angular/core';
import { Author } from '../_models/Author';
import { HttpClient } from '@angular/common/http';
import {GLOBAL} from '../../environments/global';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  public url: string;
  author: Author;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.mock_url;
  }

   getAuthor(id: any) {
    return this.http.get<Author>(`${this.url}/authors/` + id);
  }
}
