import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletPage } from './onglet.page';

const routes: Routes = [
  {
    path: '',
    component: OngletPage,
    children:  [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'user-dasboard',
        loadChildren: () => import('../user-dasboard/user-dasboard.module').then( m => m.UserDasboardPageModule)
      },
      {
        path: 'student-dashboard',
        loadChildren: () => import('../student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletPageRoutingModule {}
