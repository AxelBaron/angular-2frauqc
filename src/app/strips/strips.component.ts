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
  totalStrip;
  lastStrip = false;
  limit: number;
  position: number;

  constructor(
    private _strips: StripsService
  ) { }

  ngOnInit() {
    /*
    *  - Get the two first strips
    *  - On click call a new fonction with startAt
    *  - Get the next strips
    *  - Push the next strips to the strips table who already exist.
    *
    * */

    // Get limit by service.
    this._strips.limit.subscribe(limit => this.limit = limit);

    // Get orderBy by service.
    this._strips.orderBy.subscribe(orderBy => this.orderBy = orderBy);

    // Get Total strip for displaying btn
    this._strips.getTotalStrips();
    this._strips.totalStrip.subscribe(totalStrip => this.totalStrip = totalStrip);

    // Get the firsts Strips
    this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
      this.strips = result;
      this.position = this.strips[this.strips.length - 1].order;
    });
  }

  nextStrips() {
    this._strips.getNextStrips(this.position, this.orderBy, this.limit).subscribe((result: Strip[]) => {
      if (this.orderBy === 'desc') {
        this.position = this.position - this.limit;
        if (this.position < 1) {
          this.lastStrip = true;
        }
      } else {
        this.position = this.position + this.limit;
        if (this.totalStrip >= this.position) {
          this.lastStrip = true;
        }
      }
      this.strips = [...this.strips, ...result];
    });
  }
}
