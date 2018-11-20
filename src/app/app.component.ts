import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appReady = false;
  currentPosition = 0;
  visible: boolean;

  constructor() {}

  ngOnInit() {
    this.visible = false;
    this.appReady = true;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if(this.currentPosition > window.scrollY) {
      this.visible = true;
    } else {
      this.visible = false;
    }
    this.currentPosition = window.scrollY;
    /*console.log('Scroll Event', window.scrollY);*/
  }
}
