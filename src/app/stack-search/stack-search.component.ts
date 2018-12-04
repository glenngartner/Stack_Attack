import {Component, OnInit} from '@angular/core';
import {StackExchangeService} from '../stack-exchange.service';
import {StackQuestion, StackReply} from '../generic/interfaces';

@Component({
  selector: 'app-stack-search',
  templateUrl: './stack-search.component.html',
  styleUrls: ['./stack-search.component.css']
})
export class StackSearchComponent implements OnInit {

  /** The search input box value */
  public searchInput = '';

  /** The stack question search results */
  public stackQuestions: StackQuestion[] = [];
  /** the error object, if a search error is returned */
  private error;

  constructor(private stackExchangeService: StackExchangeService) {
  }

  ngOnInit() {
  }

  /** Stores the value of the search input form element */
  public captureSearchInput(value: string) {
    this.searchInput = value;
    // console.log(`Search text input value`, value);
  }

  /**
   * Checks for the Enter key press when a user is typing in the search box
   * @param event
   */
  public formSubmit(event) {
    if (event.keyCode === 13) {
      this.showQuestionsWithQuery();
    }
  }

  /**
   * Returns the Stack search results from the Stack Service, and stores the array of questions in the stackQuestions property,
   * for access by the view
   */
  showQuestionsWithQuery() {
    this.stackExchangeService.searchForQuestions(this.searchInput)
      .subscribe(
        (data: StackReply) => {
          // console.log('Stack Data received: ', data.items);
          this.stackQuestions = data.items;
          this.getAnswersFromQuery();
        },
        error => this.error = error
      );
  }

  /**
   * Gets an array of answer objects from the Stack Service, and storms them in each question's answer property
   */
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
