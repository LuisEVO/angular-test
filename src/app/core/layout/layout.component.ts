import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from './layout.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  $title: Observable<string>;
  constructor(private layoutService: LayoutService) {
    this.$title = this.layoutService.$title;
  }
}
