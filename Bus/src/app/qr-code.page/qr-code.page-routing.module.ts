import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodePagePage } from './qr-code.page.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodePagePageRoutingModule {}
