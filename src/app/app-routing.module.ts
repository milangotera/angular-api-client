import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users/list'
  },
  {
    path: 'users/list',
    component: UserListComponent,
    data: { title: 'List of Products' }
  },
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
