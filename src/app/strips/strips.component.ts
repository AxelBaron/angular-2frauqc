import { Component, OnInit } from '@angular/core';
import { StripsService } from '../strips.service';

@Component({
  selector: 'app-strips',
  templateUrl: './strips.component.html',
  styleUrls: ['./strips.component.scss']
})
export class StripsComponent implements OnInit {
  strips;
  lastStrip = false;

  constructor(
    private _strips: StripsService
  ) { }

  async ngOnInit() {
    this._strips.getAllStrips().subscribe(result => {
      this.strips = result;
      console.log(result);
    });
  }
}
