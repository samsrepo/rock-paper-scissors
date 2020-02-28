import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartContainerComponent } from './containers/start-container/start-container.component';
import { StartFormComponent } from './components/start-form/start-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StartContainerComponent,
    StartFormComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule
  ]
})
export class StartModule { }
