import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isVisible: boolean;
  private _currentSegment: any = [];

  constructor(
    public router: Router,
    private translate: TranslateService,
    private _route: ActivatedRoute
  ) {
    translate.setDefaultLang('en');
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
      console.log(this.isVisible);
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
