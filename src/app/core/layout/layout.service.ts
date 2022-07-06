import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _title = new BehaviorSubject<string>('');

  $title = this._title.asObservable();

  setTitle(title: string) {
    this._title.next(title);
  }
}
