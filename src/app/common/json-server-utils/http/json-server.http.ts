import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paginate } from '../interfaces/paginate.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonServerHttp extends HttpClient {
  getPaginated<T>(url: string, options?: any): Observable<Paginate<T>> {
    let params = new HttpParams();

    if (options.filters) {
      Object.entries(options.filters).forEach(([paramName, paramValue]) => {
        if (paramValue) {
          params = params.append(`_${paramName}`, String(paramValue))
        }
      })
    }

    return this.get(url, { observe: 'response', params, ...options })
      .pipe(
        map((res: any) => ({
          items: res.body as T,
          total: res.headers.get('X-Total-Count')
        }))
      )
  }
}
