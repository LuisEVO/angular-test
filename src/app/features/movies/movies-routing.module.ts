import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesView } from './views/movies/movies.view';

const routes: Routes = [
  {
    path: '',
    component: MoviesView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
