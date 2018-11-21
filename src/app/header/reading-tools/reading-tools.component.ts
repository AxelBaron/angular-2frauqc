import { Component, OnInit } from '@angular/core';
import { StripsService } from '../../strips.service';
import { Router } from '@angular/router';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Component({
  selector: 'app-reading-tools',
  templateUrl: './reading-tools.component.html',
  styleUrls: ['./reading-tools.component.scss']
})
export class ReadingToolsComponent implements OnInit {
  strips;
  url;
  orderBy;
  private beginningUrl = 'strip';

  constructor(
    private _strips: StripsService,
    private _router: Router
  ) { }

  async ngOnInit() {
    await this._strips.getStrips().subscribe(result => {
      this.strips = result;
    });
  }

  selectOnChange(value) {
    this.navigate(value);
  }

  navigate(id) {
    this.url = [];
    this.url.push(this.beginningUrl);
    this.url.push(id);
    this._router.navigate(this.url);
  }

  changeOrder(){
    // Get the orderBy via service.
    this._strips.orderBy.subscribe(orderBy => this.orderBy = orderBy);
    this.orderBy = (this.orderBy === 'asc') ? 'desc' : 'asc';
    console.log('orderBy', this.orderBy);
    // Change the order by
    this._strips.changeOrderBy(this.orderBy);
    // // Todo Pass  this.strips to stripsComponent
    // this._strips.getStrips(2, this.orderBy).subscribe(result => {
    //   this.strips = result;
    //   console.log('change order', this.strips);
    // });
  }
}
