import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'data',
        component: DataDisplayComponent
      },
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
