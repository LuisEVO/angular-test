import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonServerHttp } from 'src/app/common/http/json-server.http';
import { FiltersList } from 'src/app/common/interfaces/filters-list.interface';
import { Paginated } from 'src/app/common/interfaces/paginated';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttp {
  private endpoint = `${environment.baseUrl}/movies`

  constructor(private http: JsonServerHttp) { }

  getAll(filters?: FiltersList): Observable<Paginated<Movie[]>> {
    return this.http.getPaginated<Movie[]>(this.endpoint, { filters })
  }
}
