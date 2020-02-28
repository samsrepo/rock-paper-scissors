import { Injectable } from '@angular/core';
import { Choice } from './enums/choice';
import { Round } from './models/round';
import { Result } from './enums/result';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  // Main game logic
  performMove(userMove: Choice): Observable<Round> {
    // Determine the computer's choice
    const computerMove: Choice = this.performComputerMove();

    // Initialise result as a draw first
    const result: Round = {
      player: {
        result: Result.DREW,
        choice: userMove
      },
      computer: {
        result: Result.DREW,
        choice: computerMove
      }
    };

    // If it wasn't a draw...
    if (userMove !== computerMove) {
      // Determine who won using modulus comparison
      if (userMove === (computerMove + 1) % 3) {
        result.player.result = Result.WON;
        result.computer.result = Result.LOST;
      } else {
        result.player.result = Result.LOST;
        result.computer.result = Result.WON;
      }
    }
    // Return result as observable
    return of(result);
  }

  // Randomly calculate the computer's move
  performComputerMove(): Choice {
    let computerMove: Choice = Choice.PAPER;
    const rand = Math.random();
    if (rand < 0.34) {
      computerMove = Choice.ROCK;
    } else if (rand <= 0.67) {
      computerMove = Choice.SCISSORS;
    }
    return computerMove;
  }
}
