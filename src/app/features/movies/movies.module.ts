import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesView } from './views/movies/movies.view';
import { CommonMaterialModule } from 'src/app/common/material/material.module';


@NgModule({
  declarations: [
    MoviesView
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CommonMaterialModule
  ]
})
export class MoviesModule { }
