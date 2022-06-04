import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuneralMainPage } from './funeral-main.page';

const routes: Routes = [
  {
    path: '',
    component: FuneralMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuneralMainPageRoutingModule {}
