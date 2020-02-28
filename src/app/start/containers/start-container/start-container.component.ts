import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../shared/store';
import { GameState } from 'src/app/shared/models/game-state';

@Component({
  selector: 'app-start-container',
  templateUrl: './start-container.component.html',
  styleUrls: ['./start-container.component.scss']
})
export class StartContainerComponent {

  // Public form object so template has access
  startForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<GameState>) {
    // Initialise form elements
    this.startForm = this.formBuilder.group({
      player_name: ['', {validators: [Validators.required]}]
    });
  }

  startGame() {
    if (this.startForm.valid) {
      // Start game if all looks good in the form
      this.store.dispatch(fromStore.startGame(this.startForm.getRawValue()));
    }
  }
}
