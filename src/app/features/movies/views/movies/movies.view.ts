import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { finalize, map, merge, startWith, switchMap, tap } from 'rxjs';
import { MoviesHttp } from 'src/app/features/movies/http/movies.http';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  templateUrl: './movies.view.html',
  styleUrls: ['./movies.view.scss']
})
export class MoviesView implements AfterViewInit {
  displayedColumns: string[] = ['title', 'year', 'cast', 'genres'];
  movies: Movie[] = [];

  maxCharacters = 50;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30];
  total = 0;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moviesHttp: MoviesHttp) {}

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(console.log),
        startWith({}),
        tap(() => this.isLoading = true),
        switchMap(() => {
          this.isLoading = true;
          return this.moviesHttp.getAll({
            page: this.paginator.pageIndex + 1,
            limit: this.paginator.pageSize,
            sort: this.sort.direction ? this.sort.active : '',
            order: this.sort.direction
          })
        }),
        tap(paginatedMovies => {
          this.movies = paginatedMovies.items;
          this.total = paginatedMovies.total;
        }),
        finalize(() => this.isLoading = false),
      )
      .subscribe();
  }

}
