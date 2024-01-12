import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'student-dashboard',
    loadChildren: () => import('./student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
  },
  {
    path: 'qr-code.page',
    loadChildren: () => import('./qr-code.page/qr-code.page.module').then( m => m.QrCodePagePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'user-dasboard',
    loadChildren: () => import('./user-dasboard/user-dasboard.module').then( m => m.UserDasboardPageModule)
  },
  {
    path: 'bus',
    loadChildren: () => import('./bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'journey',
    loadChildren: () => import('./journey/journey.module').then( m => m.JourneyPageModule)
  },
  {
    path: 'grant-pass',
    loadChildren: () => import('./grant-pass/grant-pass.module').then( m => m.GrantPassPageModule)
  },
  {
    path: 'onglet',
    loadChildren: () => import('./onglet/onglet.module').then( m => m.OngletPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'localisation',
    loadChildren: () => import('./localisation/localisation.module').then( m => m.LocalisationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
