import { createReducer, on, State } from '@ngrx/store';
import * as fromActions from '.';
import { GameState } from '../models/game-state';
import { GameStatus } from '../enums/status';

export const initialState: GameState = {
  status: GameStatus.NOT_STARTED,
  player_name: '',
  past_rounds: [],
};

const reducer = createReducer(initialState,
  on(fromActions.startGame, (state, player) => ({
    ...initialState,
    player_name: player.player_name,
    status: GameStatus.IN_PROGRESS
  })),
  on(fromActions.saveResults, (state, action) => ({
    ...state,
    status: GameStatus.ROUND_OVER,
    past_rounds: [...state.past_rounds, action.result]
  })),
  on(fromActions.startNextRound, (state, action) => ({
    ...state,
    status: GameStatus.IN_PROGRESS
  })),
  on(fromActions.completeGame, (state) => ({
    ...state,
    status: GameStatus.GAME_OVER
  })),
  on(fromActions.playAgain, (state) => ({
    ...state,
    status: GameStatus.IN_PROGRESS,
    current_round: 1,
    past_rounds: []
  })),
  on(fromActions.startOver, (state) => ({
    ...initialState,
  })),
);

export function gameReducer(state, action) {
  return reducer(state, action);
}
