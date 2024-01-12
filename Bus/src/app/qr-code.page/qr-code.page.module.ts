import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodePagePageRoutingModule } from './qr-code.page-routing.module';

import { QrCodePagePage } from './qr-code.page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodePagePageRoutingModule
  ],
  declarations: [QrCodePagePage]
})
export class QrCodePagePageModule {}
