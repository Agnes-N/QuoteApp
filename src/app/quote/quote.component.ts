import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';
  quotes: Quote[] = [
    { id: 1, quote: 'Reading Is To The Mind, As Exercise Is To The Body.', author: 'Brian Tracy' },
    { id: 2, quote: 'Today’s Accomplishments Were Yesterday’s Impossibilities.', author: 'Robert H. Schuller' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
