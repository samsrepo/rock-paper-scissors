import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap, withLatestFrom, filter } from 'rxjs/operators';
import * as fromActions from './actions';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { AppRoutes } from '../constants/routes';
import { Store } from '@ngrx/store';
import { GameState } from '../models/game-state';
import * as fromStore from './state';
import { GameStatus } from '../enums/status';

@Injectable()
export class Effects {

  constructor(
    private actions: Actions,
    private service: GameService,
    private router: Router,
    private store: Store<GameState>
  ) {}

  startGame = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.startGame, fromActions.playAgain),
      tap(() => {
        this.router.navigate([AppRoutes.GAME]);
      })
    ),
    { dispatch: false }
  );

  resetGame = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.startOver),
      tap(() => {
        this.router.navigate([AppRoutes.START]);
      })
    ),
    { dispatch: false }
  );

  checkInProgress = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.checkInProgress),
      withLatestFrom(this.store.select(fromStore.selectGameStatus)),
      filter(([action, status]) => status !== (GameStatus.IN_PROGRESS || GameStatus.ROUND_OVER)),
      tap(() => {
        this.router.navigate([AppRoutes.START]);
      })
    ),
    { dispatch: false }
  );

  checkCompleted = createEffect(() =>
  this.actions.pipe(
    ofType(fromActions.checkCompleted),
    withLatestFrom(this.store.select(fromStore.selectGameStatus)),
    filter(([action, status]) => status !== GameStatus.GAME_OVER),
    tap(() => {
      this.router.navigate([AppRoutes.START]);
    })
  ),
  { dispatch: false }
);

  performMove = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.performMove),
      switchMap(action =>
        this.service.performMove(action.move).pipe(
          map((result) => fromActions.saveResults({result}))
        )
      )
    )
  );

  finishGame = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.startNextRound),
      withLatestFrom(this.store.select(fromStore.selectRounds)),
      filter(([action, pastRounds]) => pastRounds.length > 9),
      map((result) => fromActions.completeGame()),
      tap(() => {
        this.router.navigate([AppRoutes.RESULTS]);
      })
    )
  );
}
