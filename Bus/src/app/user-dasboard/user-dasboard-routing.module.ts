import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDasboardPage } from './user-dasboard.page';

const routes: Routes = [
  {
    path: '',
    component: UserDasboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDasboardPageRoutingModule {}
