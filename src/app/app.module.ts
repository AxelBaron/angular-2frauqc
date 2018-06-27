import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
                {
                    path: '',
                    component: HomeComponent
                },
                {
                    path: 'info',
                    component: InfoComponent
                },
                {
                    path: 'news',
                    component: InfoComponent
                }
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
