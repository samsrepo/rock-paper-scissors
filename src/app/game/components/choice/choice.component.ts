import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { Choice } from 'src/app/shared/enums/choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceComponent implements OnInit {

  choices = Choice;
  icons = icons;
  @Output() performMove = new EventEmitter<Choice>();

  constructor() { }

  ngOnInit(): void {

  }

}
