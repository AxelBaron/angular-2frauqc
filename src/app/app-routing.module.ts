import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StripComponent } from './strip/strip.component';
import { StripsComponent } from './strips/strips.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'infos', component: InfoComponent },
  { path: 'strips', component: StripsComponent },
  { path: 'strip/:id', component: StripComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'dons', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
