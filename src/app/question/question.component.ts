import {Component, Input, OnInit} from '@angular/core';
import {StackQuestion} from '../generic/interfaces';
import {$} from 'protractor';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public mouseIsOver = false;
  private _question: StackQuestion;
  private _titleCharLength = 45;

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

  public onMouseOver() {
    console.log('Mouse over this element');
    this.mouseIsOver = true;
  }

  public onMouseOut(){
    console.log('Mouse is out');
    this.mouseIsOver = false;
  }
}
