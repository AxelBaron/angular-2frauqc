import { Component, OnInit } from '@angular/core';
import { StripsService } from '../../strips.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading-tools',
  templateUrl: './reading-tools.component.html',
  styleUrls: ['./reading-tools.component.scss']
})
export class ReadingToolsComponent implements OnInit {
  strips;
  url;
  private beginningUrl = 'strip';

  constructor(
    private _strips: StripsService,
    private _router: Router
  ) { }

  async ngOnInit() {
    await this._strips.getAllStrips().subscribe(result => {
      this.strips = result;
      console.log('strip', this.strips);
    });
  }

  selectOnChange(value) {
    this.navigate(value);
  }

  navigate(id) {
    this.url = [];
    this.url.push(this.beginningUrl);
    this.url.push(id);
    console.log('url', this.url);
    this._router.navigate(this.url);
  }
}
