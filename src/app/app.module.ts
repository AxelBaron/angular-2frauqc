import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BurgerComponent } from './header/burger/burger.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { LangSwitcherComponent } from './header/lang-switcher/lang-switcher.component';
import { LoaderComponent } from './loader/loader.component';
import { NavComponent } from './header/nav/nav.component';
import { NavToolComponent } from './strip/nav-tool/nav-tool.component';
import { ReadingToolsComponent } from './header/reading-tools/reading-tools.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SocialNetworksComponent } from './header/social-networks/social-networks.component';
import { StripComponent } from './strip/strip.component';
import { StripsComponent } from './strips/strips.component';
import { StripService } from './strip.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UpComponent } from './up/up.component';
import { FooterComponent } from './footer/footer.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    HeaderComponent,
    InfoComponent,
    LangSwitcherComponent,
    LoaderComponent,
    NavComponent,
    NavToolComponent,
    ReadingToolsComponent,
    SocialNetworksComponent,
    StripComponent,
    StripsComponent,
    UpComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    DeferLoadModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
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
