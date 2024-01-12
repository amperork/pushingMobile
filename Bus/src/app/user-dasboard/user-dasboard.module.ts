import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDasboardPageRoutingModule } from './user-dasboard-routing.module';

import { UserDasboardPage } from './user-dasboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDasboardPageRoutingModule
  ],
  declarations: [UserDasboardPage]
})
export class UserDasboardPageModule {}
