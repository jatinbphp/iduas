import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterDeathPage } from './after-death.page';

const routes: Routes = [
  {
    path: '',
    component: AfterDeathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterDeathPageRoutingModule {}
