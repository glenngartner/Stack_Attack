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
  public concatTitle = '';
  public menuIsOpen = false;
  private _question: StackQuestion;
  private _titleCharLength = 45;

  @Input()
  set question(value: StackQuestion) {
    this.trimTitle(value.title);
    this._question = value;
  }

  get question(): StackQuestion {
    return this._question;
  }

  @Input()
  public questionNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  private trimTitle(title: string): void {
    if (title.length > this._titleCharLength) {
      this.concatTitle = title.substr(0, this._titleCharLength) + '...';
    } else {
      this.concatTitle = title;
    }
  }

  public onMouseOver() {
    this.mouseIsOver = true;
  }

  public onMouseOut() {
    this.mouseIsOver = false;
  }

  public menuToggle() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
