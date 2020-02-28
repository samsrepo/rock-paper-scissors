import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Round } from 'src/app/shared/models/round';
import { GameStatus } from 'src/app/shared/enums/status';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailComponent implements OnInit {

  @Input() rounds: Round[];
  @Input() playerName: string;
  @Input() status: GameStatus;
  @Output() startNextRound = new EventEmitter();

  statuses = GameStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
