import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/shared/models/game-state';
import * as fromStore from '../../../shared/store';
import { Observable } from 'rxjs';
import { Round } from 'src/app/shared/models/round';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  rounds: Observable<Round[]>;

  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.checkCompleted());
    this.rounds = this.store.select(fromStore.selectRounds);
  }

  playAgain() {
    this.store.dispatch(fromStore.playAgain());
  }

  startOver() {
    this.store.dispatch(fromStore.startOver());
  }

}
