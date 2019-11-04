import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  apiUrl: string = "http://localhost:8000/api";

  constructor(private http: HttpClient){
  }

  userList() : Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/users`);
  }
}
