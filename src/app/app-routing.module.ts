import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StripComponent } from './strip/strip.component';
import { StripsComponent } from './strips/strips.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: StripsComponent },
  { path: 'infos', component: InfoComponent },
  { path: 'strips', component: StripsComponent },
  { path: 'strip/:id', component: StripComponent, runGuardsAndResolvers: 'paramsChange'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
