import {Component, OnInit} from '@angular/core';
import {StackExchangeService} from '../stack-exchange.service';
import {StackQuestion, StackReply} from '../generic/interfaces';

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
    this.stackExchangeService.searchForQuestions(this.searchInput)
      .subscribe(
        (data: StackReply) => {
          console.log('Stack Data received: ', data.items);
          this.stackQuestions = data.items;
          this.getAnswersFromQuery();
        },
        error => this.error = error
      );
  }

  getAnswersFromQuery() {
    for (const question of this.stackQuestions) {
      if (question.answer_count > 0) {
        this.stackExchangeService.searchForAnswersToQuestion(question.question_id)
          .subscribe(
            (data: StackReply) => {
              console.log('Stack Answers Received: ', data.items);
              question.answers = data.items;
            },
            error => this.error = error
          );
      }
    }
  }
}
