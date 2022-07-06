import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesView } from './views/movies/movies.view';
import { MoviesMaterialModule } from './material.module';

@NgModule({
  declarations: [
    MoviesView,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MoviesMaterialModule
  ]
})
export class MoviesModule { }
