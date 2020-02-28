import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Round } from 'src/app/shared/models/round';
import { OverallWinner } from 'src/app/shared/models/winner';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultDetailComponent implements OnInit {

  @Input() winner: OverallWinner;

  constructor() { }

  ngOnInit(): void {
  }

}
