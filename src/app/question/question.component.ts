import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {StackQuestion} from '../generic/interfaces';
import * as $ from 'jquery';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit, OnChanges {

  /** Toggled true when mouse is over element*/
  public mouseIsOver = false;
  /** The concatinated title for displaying on the rsults list button. Automatically adjusts to window width*/
  public concatTitle = '';
  /** Toggled true when the specific result menu list item has been opened (ie: is not collapsed)*/
  public menuIsOpen = false;
  /** Stores the highlight color (in CSS color format) for the accepted answer to this question, if any*/
  public acceptedAnswerHighlightColor = 'honeydew';

  /** Reference to the specific stack question for this view instance.*/
  private _question: StackQuestion;
  /** Tracks if the expanded menu has been clicked. */
  private _clickedInsideExpandedMenu = false;
  /** Tracks if the results title menu has been clicked*/
  private _resultTitleClicked = false;

  @Input()
  /** Reference to the question for this instance. Received from the parent view, which searches
   * performs the search. This setter will trim the title when the question reference is made
   */
  set question(value: StackQuestion) {
    this.trimTitle(value.title);
    this._question = value;
  }

  /** Reterns reference to this instances question object*/
  get question(): StackQuestion {
    return this._question;
  }

  /** The question number unique to this instance. The parent search template assigns this value*/
  @Input()
  public questionNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Looks for changes in the input properties
   * Question objects, in this case
   */
  ngOnChanges() {
    this.configureImagesInSource();
  }

  /** Calls the trim title private method, accessible from the view*/
  public resizeConcatTitle() {
    if (this._question && this._question.title) {
      this.trimTitle(this._question.title);
    }
  }

  /**
   * Returns this question object's date value, fixed for Anuglar date pipe conversion
   */
  public getDate(): Date {
    return new Date(this._question.creation_date * 1000);
  }

  /**
   * Called when the question input property changes
   * Looks for all images in the document (including questions and answers), and makes them
   * bootstrap images. otherwise, they're huge!! and not responsive, at all
   */
  private configureImagesInSource() {
    const images = $('img');
    images.addClass('img-thumbnail');
  }

  /**
   * Trims the title of this question, and stores the value in the concatTitle property.
   * This helps fit the question titles within the view bounds (ie: makes them responsive)
   * @param title
   */
  private trimTitle(title: string): void {
    const documentWidth = window.innerWidth;
    if (title.length > documentWidth / 12) {
      this.concatTitle = title.substr(0, documentWidth / 12) + '...';
    } else {
      this.concatTitle = title;
    }
  }

  /**
   * Sets mouseIsOver property to true on mouse over
   */
  public onMouseOver() {
    this.mouseIsOver = true;
  }

  /**
   * Sets mouseIsOver property to false when mouse is out
   */
  public onMouseOut() {
    this.mouseIsOver = false;
  }

  /**
   * Toggles the menuIsOpen property, based on other property values
   */
  public menuToggle() {
    if (this._resultTitleClicked && !this._clickedInsideExpandedMenu) {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }

  /**
   * Sets resultTitleClicked property when result title element is clicked
   */
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

  /**
   * Sets _clickedInsideExpandedMenu property when the expanded menu is clicked
   */
  public onClickExpandedMenu() {
    this._clickedInsideExpandedMenu = true;
    this.menuToggle();
  }
}
