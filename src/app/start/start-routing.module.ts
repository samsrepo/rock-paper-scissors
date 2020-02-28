import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartContainerComponent } from './containers/start-container/start-container.component';


const routes: Routes = [
  {path: '',  component: StartContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
