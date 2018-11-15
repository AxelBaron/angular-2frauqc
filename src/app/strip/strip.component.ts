import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StripsService } from '../strips.service';
import { Strip } from '../strip';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {
  strip: Strip;
  @Input() id: number;

  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    private _strips: StripsService) { }

  async ngOnInit() {
    if (!this.id){
      this._route.params.subscribe((params: Params) => this.id = params.id);
    }
    this._strips.getStrip(this.id).subscribe(result => {
      this.strip = result;
    });
  }
}
