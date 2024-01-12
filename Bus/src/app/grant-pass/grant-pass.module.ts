import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrantPassPageRoutingModule } from './grant-pass-routing.module';

import { GrantPassPage } from './grant-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrantPassPageRoutingModule
  ],
  declarations: [GrantPassPage]
})
export class GrantPassPageModule {}
