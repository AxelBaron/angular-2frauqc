import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {
  @Input() isVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  goTop() {
    window.scrollTo(0, 0);
  }
}
