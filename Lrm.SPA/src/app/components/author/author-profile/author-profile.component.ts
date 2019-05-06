import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../../_services/author.service';
import { Author } from '../../../_models/Author';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

  author: Author;
  constructor(private route: ActivatedRoute, private authorService: AuthorService ) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
      const id = + this.route.snapshot.paramMap.get('id');
      this.authorService.getAuthor(id).subscribe(
        (author) => {
          this.author = author;
         }
      );
  }

}
