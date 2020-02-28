import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/shared/models/game-state';
import * as fromStore from '../../../shared/store';
import { Observable } from 'rxjs';
import { Choice } from 'src/app/shared/enums/choice';
import { Round } from 'src/app/shared/models/round';
import { GameStatus } from 'src/app/shared/enums/status';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  rounds: Observable<Round[]>;
  playerName: Observable<string>;
  status: Observable<GameStatus>;

  statuses = GameStatus;

  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.checkInProgress());
    this.rounds = this.store.select(fromStore.selectRounds);
    this.playerName = this.store.select(fromStore.selectPlayerName);
    this.status = this.store.select(fromStore.selectGameStatus);
  }

  performMove(move: Choice) {
    this.store.dispatch(fromStore.performMove({move}));
  }

  startNextRound() {
    this.store.dispatch(fromStore.startNextRound());
  }

}
