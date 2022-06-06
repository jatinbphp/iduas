import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterDeathPageRoutingModule } from './after-death-routing.module';

import { AfterDeathPage } from './after-death.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterDeathPageRoutingModule
  ],
  declarations: [AfterDeathPage]
})
export class AfterDeathPageModule {}
