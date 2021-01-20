import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetComponent } from './dataset/dataset.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
    path: 'dataset',
    component: DatasetComponent
  },
  {
     path:'play',
     component: PlayComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
