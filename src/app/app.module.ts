import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserShowComponent } from './pages/users/user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UserListComponent,
    UserAddComponent,
    UserShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
