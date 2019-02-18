import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isVisible: boolean;
  toggleMenu: boolean;
  @ViewChild('toggleMenu') el: ElementRef;
  private _currentSegment: any = [];

  constructor(
    private _route: ActivatedRoute,
    private _translate: TranslateService,
    public router: Router
  ) {
    _translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.url) {
        this._currentSegment = event.url.split('/');
        if (this._currentSegment[1] === 'strip') {
          this.isVisible = false;
        } else {
          this.isVisible = true;
        }
      }
      this.toggleMenu = false;
    });
  }

  switchLanguage(language: string) {
    this._translate.use(language);
  }
}
