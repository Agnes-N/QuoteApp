import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote[];
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // votes
  votes : number;
  // vote = 0;
  constructor() {
    this.votes = 0;
   }
   likeVote(){
     this.votes+=1;
   }

   dislikeVote(){
     this.votes-=1;
   }

  ngOnInit() {
  }

}
