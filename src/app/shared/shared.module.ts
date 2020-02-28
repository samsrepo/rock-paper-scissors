import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetermineMoveIconPipe } from './pipes/determine-move-icon.pipe';
import { FormatRoundWinnerPipe } from './pipes/format-round-winner.pipe';
import { FormatGameWinnerPipe } from './pipes/format-game-winner.pipe';
import { FormatRoundPointPipe } from './pipes/format-round-point.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DetermineMoveIconPipe,
    FormatRoundWinnerPipe,
    FormatGameWinnerPipe,
    FormatRoundPointPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    DetermineMoveIconPipe,
    FormatRoundWinnerPipe,
    FormatGameWinnerPipe,
    FormatRoundPointPipe
  ]
})
export class SharedModule { }
