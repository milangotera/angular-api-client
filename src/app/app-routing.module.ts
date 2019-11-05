import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserShowComponent } from './pages/users/user-show/user-show.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users/list'
  },
  {
    path: 'users/list',
    component: UserListComponent,
  },
  {
    path: 'users/add',
    component: UserAddComponent,
  },
  {
    path: 'users/:id',
    component: UserShowComponent,
  },
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
