import {Component, OnInit} from '@angular/core';
import {StackExchangeService} from '../stack-exchange.service';
import {StackQuestion, StackReply} from '../generic/interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-stack-search',
  templateUrl: './stack-search.component.html',
  styleUrls: ['./stack-search.component.css']
})
export class StackSearchComponent implements OnInit {

  public searchInput = '';

  public stackQuestions: StackQuestion[] = [];
  private error;

  constructor(private stackExchangeService: StackExchangeService) {
    console.log('Test');
  }

  ngOnInit() {
  }

  public captureSearchInput(value: string) {
    this.searchInput = value;
    console.log(`Search text input value`, value);
  }

  showQuestionsWithQuery() {
    // this.stackReply$ = this.stackExchangeService.searchForQuestions(this.searchInput);
    this.stackExchangeService.searchForQuestions(this.searchInput)
      .subscribe(
        (data: StackReply) => {
          console.log('Stack Data received: ', data.items);
          this.stackQuestions = data.items;
        },
        error => this.error = error
      );
  }
}
