import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
