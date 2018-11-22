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
  newLimit: number;
  totalStrips;
  toto;

  constructor(
    private _strips: StripsService
  ) { }

  async ngOnInit() {
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
    await this._strips.orderBy.subscribe(orderBy => {
      this.orderBy = orderBy;
      this._strips.resetLimit();
      this.getStrips();
      this.lastStrip = false;
    });

    // Get total strip by service
    await this._strips.getTotalStrips();

    this._strips.getNextStrips(4, 'asc', 2).subscribe(result => {
      this.toto = result;
      console.log(this.toto);
    });
  }

  getStrips() {
    // Get strips if data updated.
    this._strips.getStrips(this.limit, this.orderBy).subscribe(result => {
      this.strips = result;
    });

    this._strips.totalStrips.subscribe(totalStrips => {
      this.totalStrips = totalStrips;
    });

    if (this.newLimit === this.totalStrips) {
      this.lastStrip = true;
    }

    this.newLimit = this.limit + 2;
    this._strips.changeLimit(this.newLimit);
  }

  nextStrips() {
    this.getStrips();
  }
}
