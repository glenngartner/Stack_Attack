import {Component, Input, OnInit} from '@angular/core';
import {StackQuestion} from '../generic/interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: StackQuestion;

  constructor() {
  }

  ngOnInit() {
  }

}
