import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // title = 'Quotes';
  quotes: Quote[] = [
    new Quote(1, 'Reading Is To The Mind, As Exercise Is To The Body.', 'Brian Tracy', 'Dona Ella', new Date(2019,8,1)),
    new Quote(2, 'Today’s Accomplishments Were Yesterday’s Impossibilities.', 'Robert H. Schuller', 'Allen B', new Date(2019,7,4)),
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

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  
  constructor() { }

  ngOnInit() {
  }

}
