import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultContainerComponent } from './containers/result-container/result-container.component';


const routes: Routes = [
  {path: '', component: ResultContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
