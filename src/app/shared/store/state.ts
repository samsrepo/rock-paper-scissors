import { createSelector } from '@ngrx/store';
import { GameState } from '../models/game-state';

export const selectState = (state: any) => state.gameState;

export const selectPlayerName = createSelector(
  selectState,
  (state: GameState) => {
    return state.player_name;
  }
);

export const selectGameStatus = createSelector(
  selectState,
  (state: GameState) => {
    return state.status;
  }
);

export const selectRounds = createSelector(
  selectState,
  (state: GameState) => {
    return state.past_rounds;
  }
);
