import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../enums/result';

@Pipe({
  name: 'formatRoundPoint'
})
export class FormatRoundPointPipe implements PipeTransform {

  transform(result: Result): number {
    let points = 0;
    if (result === Result.WON) {
      points = 1;
    }
    return points;
  }
}
