import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameContainerComponent } from './containers/game-container/game-container.component';
import { SharedModule } from '../shared/shared.module';
import { ChoiceComponent } from './components/choice/choice.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';


@NgModule({
  declarations: [
    GameContainerComponent,
    ChoiceComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }
