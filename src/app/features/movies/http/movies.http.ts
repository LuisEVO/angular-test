import { Injectable } from '@angular/core';
import { Filters, JsonServerHttp, Paginate } from '@common/json-server-utils';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttp {
  private endpoint = `${environment.baseUrl}/movies`

  constructor(private http: JsonServerHttp) { }

  getAll(filters?: Filters): Observable<Paginate<Movie[]>> {
    return this.http.getPaginated<Movie[]>(this.endpoint, { filters })
  }
}
