import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { Round } from 'src/app/shared/models/round';

@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundResultComponent implements OnInit {

  @Input() result: Round;
  @Input() playerName: string;
  @Input() index = 0;
  icons = icons;

  constructor() { }

  ngOnInit(): void {
  }

}
