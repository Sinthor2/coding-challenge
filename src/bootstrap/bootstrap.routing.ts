import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: './../app/app.module#AppModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './../auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule {}
