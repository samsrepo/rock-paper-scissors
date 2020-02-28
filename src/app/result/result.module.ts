import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultContainerComponent } from './containers/result-container/result-container.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RoundResultComponent } from './components/round-result/round-result.component';


@NgModule({
  declarations: [ResultContainerComponent, ResultDetailComponent, RoundResultComponent],
  imports: [
    CommonModule,
    ResultRoutingModule,
    SharedModule
  ]
})
export class ResultModule { }
