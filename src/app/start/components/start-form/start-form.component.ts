import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent {

  // Pass in from from parent
  @Input() startForm: FormGroup;

  // Emit event to parent when form submitted
  @Output() submitted = new EventEmitter();

  constructor() { }

  get playerName() {
    return this.startForm.get('player_name');
  }

}
