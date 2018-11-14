import { Component, OnInit } from '@angular/core';
import { STRIPS } from '../mock-strips';

@Component({
  selector: 'app-strips',
  templateUrl: './strips.component.html',
  styleUrls: ['./strips.component.scss']
})
export class StripsComponent implements OnInit {
  PAGE_INDEX = 0;
  PAGE_SIZE = 2;
  strips;
  lastStrip = false;
  displayReversed = true;

  constructor() { }

  async ngOnInit() {
    this.strips = await this.getNextStrips();
    console.log(this.strips);
  }

  async getNextStrips() {
    return STRIPS.reverse().slice(this.PAGE_INDEX * this.PAGE_SIZE, (this.PAGE_INDEX + 1) * this.PAGE_SIZE);
  }

  async loadNext() {
    this.PAGE_INDEX++;
    const data = await this.getNextStrips();
    if (data.length < this.PAGE_SIZE) {
      this.lastStrip = true;
    }
    this.strips = [...data, ...this.strips]; // a inverser
  }
}
