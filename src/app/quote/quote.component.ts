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
    new Quote(1, 'Reading Is To The Mind, As Exercise Is To The Body.', 'Brian Tracy'),
    new Quote(2, 'Today’s Accomplishments Were Yesterday’s Impossibilities.', 'Robert H. Schuller'),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Do you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
