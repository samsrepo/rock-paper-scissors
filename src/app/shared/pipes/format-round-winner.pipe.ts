import { Pipe, PipeTransform } from '@angular/core';
import { Round } from '../models/round';
import { Result } from '../enums/result';

@Pipe({
  name: 'formatRoundWinner'
})
export class FormatRoundWinnerPipe implements PipeTransform {

  transform(result: Round, playerName: string): string {
    let winner = '';
    if (result) {
      switch (result.player.result) {
        case Result.WON:
          winner = playerName + ' wins!';
          break;
        case Result.LOST:
          winner = 'The machine won';
          break;
        case Result.DREW:
          winner = 'It is a draw!';
          break;
        default:
          winner = 'Could not determine winner';
      }
    }
    return winner;
  }

}
