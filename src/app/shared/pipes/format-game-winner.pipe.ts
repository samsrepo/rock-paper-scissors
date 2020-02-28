import { Pipe, PipeTransform } from '@angular/core';
import { Round } from '../models/round';
import { Result } from '../enums/result';
import { OverallWinner } from '../models/winner';

@Pipe({
  name: 'formatGameWinner'
})
export class FormatGameWinnerPipe implements PipeTransform {

  transform(results: Round[]): OverallWinner {
    const overallResult: OverallWinner = {
      winnerText: '',
      userWins: 0,
      computerWins: 0
    };
    for (const i in results) {
      if (results[i]) {
        switch (results[i].player.result) {
          case Result.WON:
            overallResult.userWins++;
            break;
          case Result.LOST:
            overallResult.computerWins++;
            break;
        }
      }
    }

    if (overallResult.computerWins === overallResult.userWins) {
      overallResult.winnerText = 'It\'s a tie!';
    } else if (overallResult.computerWins > overallResult.userWins) {
      overallResult.winnerText = 'The machine won';
    } else if (overallResult.computerWins < overallResult.userWins) {
      overallResult.winnerText = 'You won!';
    }
    return overallResult;
  }

}
