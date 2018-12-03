import {Component, Input, OnInit} from '@angular/core';
import {StackQuestion, StackReply} from '../generic/interfaces';
import {StackExchangeService} from '../stack-exchange.service';

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
