import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-releases-card',
  templateUrl: './releases-card.component.html',
  styleUrls: ['./releases-card.component.scss']
})
export class ReleasesCardComponent implements OnInit {

  @Input() release_book: any;

  constructor() { }

  ngOnInit() {
  }

}
