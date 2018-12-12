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

    // Subscribe: Run once and every time limit(in service) change.
    this._strips.limit.subscribe(limit => this.limit = limit);

    // Subscribe: Run one time and every time orderBy(in service) change.
    this._strips.orderBy.subscribe(orderBy => {
      this.orderBy = orderBy;
      this.lastStrip = false;

      if (this.orderBy === 'asc') {
        this.position = 0;
      } else {
        this._strips.getTotalStrips();
        this._strips.totalStrip.subscribe(totalStrip => this.totalStrip = totalStrip);
        this.position = this.totalStrip - 1;
      }

      this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
        this.strips = result;
        if (this.orderBy === 'desc') {
          this.position = this.strips[this.strips.length - 1].order;
        } else {
          this.position = this.position + (this.limit - 1);
        }
      });
    });
  }

  nextStrips() {
    this._strips.getNextStrips(this.position, this.orderBy, this.limit).subscribe((result: Strip[]) => {
      if (this.orderBy === 'desc') {
        this.position = this.position - this.limit;
        this.lastStrip = this.position < 1; // Return true or false
      } else {
        this.position = this.position + this.limit;
        this.lastStrip = this.position >= (this.totalStrip - 1); // Return true or false
      }
      this.strips = [...this.strips, ...result];
    });
  }
}
