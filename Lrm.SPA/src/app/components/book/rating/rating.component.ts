import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;

  inputName: string;

  ngOnInit() {
  }
  onClick(rating: number): void {
    this.rating = rating;
  }

}
