import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { StripComponent } from './strip/strip.component';
import { StripService } from './strip.service';
import { AppRoutingModule } from './app-routing.module';
import { StripsComponent } from './strips/strips.component';
import { BurgerComponent } from './header/burger/burger.component';
import { LangSwitcherComponent } from './header/lang-switcher/lang-switcher.component';
import { SocialNetworksComponent } from './header/social-networks/social-networks.component';
import { NavComponent } from './header/nav/nav.component';
import { ReadingToolsComponent } from './header/reading-tools/reading-tools.component';
import { NavToolComponent } from './strip/nav-tool/nav-tool.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    StripComponent,
    StripsComponent,
    BurgerComponent,
    LangSwitcherComponent,
    SocialNetworksComponent,
    NavComponent,
    ReadingToolsComponent,
    NavToolComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [StripService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
