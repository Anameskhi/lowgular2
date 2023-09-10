import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full'
  },
  {
    path: 'candidates',
    loadChildren: () => import('./pages/all-users/all-users.module').then(m => m.AllUsersModule)
  },
  {
    path: 'candidates/:id',
    loadChildren: () => import('./pages/user-info/user-edit.module').then(m => m.UserInfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
