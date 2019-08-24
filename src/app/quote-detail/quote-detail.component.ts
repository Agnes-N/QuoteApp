import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote[];
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  // votes

  firstNumber: number
  lastNumber: number
  counter: number

  upVotes: number;
  downVotes: number;

  constructor() {
    this.upVotes = 0;
    this.downVotes = 0;
    this.firstNumber = 0;
    this.lastNumber = 0;

  }
  likeVote() {
    this.upVotes += 1;
  }

  dislikeVote() {
    this.downVotes += 1;
  }


  highestUpvote() {
    this.firstNumber = 0
    this.lastNumber = 0

    for (this.counter = 0; this.counter < this.quote.length; this.counter++) {
      this.lastNumber = this.quote[this.counter].upVotes;
      if (this.lastNumber > this.firstNumber) { this.firstNumber = this.lastNumber }
    }
    return this.firstNumber
  }
  ngOnInit() {
  }

}
