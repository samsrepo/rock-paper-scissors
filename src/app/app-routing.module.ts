import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './shared/constants/routes';


const routes: Routes = [
  {path: '', loadChildren: () => import('./start/start.module').then(c => c.StartModule)},
  {path: AppRoutes.GAME, loadChildren: () => import('./game/game.module').then(c => c.GameModule)},
  {path: AppRoutes.RESULTS, loadChildren: () => import('./result/result.module').then(c => c.ResultModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
