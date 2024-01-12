import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantPassPage } from './grant-pass.page';

const routes: Routes = [
  {
    path: '',
    component: GrantPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrantPassPageRoutingModule {}
