import { createAction, props } from '@ngrx/store';
import { Choice } from '../enums/choice';
import { Round } from '../models/round';

export const startGame = createAction('[Rock, Paper, Scissors] Start Game', props<{ player_name: string }>());
export const checkInProgress = createAction('[Rock, Paper, Scissors] Check In Progress');
export const checkCompleted = createAction('[Rock, Paper, Scissors] Check Completed');
export const performMove = createAction('[Rock, Paper, Scissors] Perform Move', props<{move: Choice}>());
export const saveResults = createAction('[Rock, Paper, Scissors] Save Results', props<{result: Round}>());
export const startNextRound = createAction('[Rock, Paper, Scissors] Start Next Round');
export const completeGame = createAction('[Rock, Paper, Scissors] Complete Game');
export const playAgain = createAction('[Rock, Paper, Scissors] Play Again');
export const startOver = createAction('[Rock, Paper, Scissors] Start Over');
