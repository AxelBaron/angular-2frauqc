import { Component, Input, OnInit } from '@angular/core';
import { Strip } from '../strip';
import { STRIPS } from '../mock-strips';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {

  @Input() strip: Strip;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    if (!this.strip) {
      this.strip = await this.getData();
    }
  }

  async getData() {
    const id = +this.route.snapshot.paramMap.get('id');
    return STRIPS.filter(item => item.id === id)[0];
  }
}
