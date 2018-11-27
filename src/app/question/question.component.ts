import {Component, Input, OnInit} from '@angular/core';
import {StackQuestion} from '../generic/interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private _question: StackQuestion;
  private _titleCharLength = 35;

  @Input()
  set question(value: StackQuestion) {
    if (value.title.length > this._titleCharLength) {
      value.title = value.title.substr(0, this._titleCharLength) + '...';
    }
    this._question = value;
  }
  get question(): StackQuestion {
    return this._question;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
