import { Component, Input, OnInit } from '@angular/core';
import { Strip } from '../strip';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {

  @Input() strip: Strip;

  constructor(
    public router: Router,
    private _route: ActivatedRoute) { }

  async ngOnInit() {
    if (!this.strip) {
      //this.strip = await this.getData();
    }
    console.log('aaaaaaaaaaaa', this.strip);
  }

  async getData() {
    const id = +this._route.snapshot.paramMap.get('id');
    //return STRIPS.filter(item => item.id === id)[0];
  }
}
