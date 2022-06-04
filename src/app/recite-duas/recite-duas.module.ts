import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciteDuasPageRoutingModule } from './recite-duas-routing.module';

import { ReciteDuasPage } from './recite-duas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciteDuasPageRoutingModule
  ],
  declarations: [ReciteDuasPage]
})
export class ReciteDuasPageModule {}
