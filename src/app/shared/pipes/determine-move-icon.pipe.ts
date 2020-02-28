import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../enums/result';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { Round } from '../models/round';
import { Choice } from '../enums/choice';

@Pipe({
  name: 'determineMoveIcon'
})
export class DetermineMoveIconPipe implements PipeTransform {

  transform(round: Round, type: string): IconDefinition {
    let icon: IconDefinition = icons.faQuestionCircle;
    if (round) {
      switch (round[type].choice) {
        case Choice.PAPER:
          icon = icons.faHandPaper;
          break;
        case Choice.ROCK:
          icon = icons.faHandRock;
          break;
        case Choice.SCISSORS:
          icon = icons.faHandScissors;
          break;
      }
    }
    return icon;
  }

}
