import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciteDuasPage } from './recite-duas.page';

const routes: Routes = [
  {
    path: '',
    component: ReciteDuasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciteDuasPageRoutingModule {}
