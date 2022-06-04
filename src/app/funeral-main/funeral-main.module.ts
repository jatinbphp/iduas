import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuneralMainPageRoutingModule } from './funeral-main-routing.module';

import { FuneralMainPage } from './funeral-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuneralMainPageRoutingModule
  ],
  declarations: [FuneralMainPage]
})
export class FuneralMainPageModule {}
