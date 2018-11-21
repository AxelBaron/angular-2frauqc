import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { StripsService } from '../../strips.service';

@Component({
  selector: 'app-nav-tool',
  templateUrl: './nav-tool.component.html',
  styleUrls: ['./nav-tool.component.scss']
})

export class NavToolComponent implements OnInit {
  strips;
  totalStrips: number;
  @Input() currentStrip: number;
  private _currentSegment: any = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _strips: StripsService
  ) { }

  async ngOnInit() {
    this._route.url.subscribe((segment: UrlSegment[]) => {
      this._currentSegment = [];
      segment.forEach(s => this._currentSegment.push(s.path));
    });

    await this._strips.getStrips().subscribe(result => {
      this.strips = result;
      this.totalStrips = this.strips.length;
    });
  }

  previousStrip() {
    // TODO Try todo this by Strip Service.
    this._currentSegment.pop();
    this._currentSegment.push(this.currentStrip - 1);
    this._router.navigate(this._currentSegment);
  }

  nextStrip() {
    // TODO Try todo this by Strip Service.
    this._currentSegment.pop();
    this._currentSegment.push(this.currentStrip + 1);
    this._router.navigate(this._currentSegment);
  }

  selectOnChange(value) {
    this.navigate(value);
  }

  navigate(id) {
    this._currentSegment.pop();
    this._currentSegment.push(id);
    this._router.navigate(this._currentSegment);
  }
}
