import { Component, OnInit } from '@angular/core';
import { StripsService } from '../strips.service';
import { Strip } from '../strip';

@Component({
  selector: 'app-strips',
  templateUrl: './strips.component.html',
  styleUrls: ['./strips.component.scss']
})

export class StripsComponent implements OnInit {
  strips: Strip[];
  orderBy;
  lastStrip = false;
  limit;

  constructor(
    private _strips: StripsService
  ) { }

  async ngOnInit() {
    // Get limit via service.
    this._strips.limit.subscribe(limit => this.limit = limit);

    // Get orderBy via service.
    this._strips.orderBy.subscribe(orderBy => {
      this.orderBy = orderBy;

      // Get strips if data updated.
      this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
        this.strips = result;
      });
    });
  }
}
