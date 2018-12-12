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

      if (this.orderBy === 'asc') {
        this.position = 0;
      }

      this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
        this.strips = result;
        console.log('strips', this.strips);
        if (this.orderBy === 'desc') {
          this.position = this.position + this.limit;
        } else {
          this.position = this.strips[this.strips.length - 1].order;
        }
      });
    });

    this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
      this.strips = result;
      console.log('strips', this.strips);
      if (this.orderBy === 'desc') {
        this.position = this.position + this.limit;
      } else {
        this.position = this.strips[this.strips.length - 1].order;
      }
    });

    // Get Total strip for the ''show more'' btn
    this._strips.getTotalStrips();
    this._strips.totalStrip.subscribe(totalStrip => this.totalStrip = totalStrip);
  }

  nextStrips() {
    console.log('nextStrips');
    this._strips.getNextStrips(this.position, this.orderBy, this.limit).subscribe((result: Strip[]) => {
      console.log('getNextStrips');
      if (this.orderBy === 'desc') {
        console.log('desc');
        this.position = this.position - this.limit;
        if (this.position < 1) {
          this.lastStrip = true;
        }
      } else {
        console.log('asc');
        this.position = this.position + this.limit;
        if (this.position >= (this.totalStrip - 1)) {
          this.lastStrip = true;
        }
      }
      this.strips = [...this.strips, ...result];
      console.log('strip Updated', this.strips);
    });
  }
}
