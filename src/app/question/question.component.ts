import {Component, Input, OnInit} from '@angular/core';
import {StackQuestion, StackReply} from '../generic/interfaces';
import * as $ from 'jquery';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public mouseIsOver = false;
  public concatTitle = '';
  public menuIsOpen = false;
  public acceptedAnswerHighlightColor = 'honeydew';

  private _question: StackQuestion;
  private _titleCharLength = 45;
  private _clickedInsideExpandedMenu = false;
  private _resultTitleClicked = false;

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

  public resizeConcatTitle() {
    console.log('Window resizing callback called');
    if (this._question && this._question.title) {
      this.trimTitle(this._question.title);
    }
  }

  public getDate(): Date {
    return new Date(this._question.creation_date * 1000);
  }

  private trimTitle(title: string): void {
    const documentWidth = window.innerWidth;
    if (title.length > documentWidth / 12) {
      this.concatTitle = title.substr(0, documentWidth / 12) + '...';
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
    if (this._resultTitleClicked && !this._clickedInsideExpandedMenu) {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }

  public onClickResultTitle() {
    if (!this._clickedInsideExpandedMenu) {
      this._resultTitleClicked = true;
    } else {
      this._resultTitleClicked = false;
    }
    this.menuToggle();
    this._resultTitleClicked = false;
    this._clickedInsideExpandedMenu = false;
  }

  public onClickExpandedMenu() {
    this._clickedInsideExpandedMenu = true;
    this.menuToggle();
  }
}
