import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: any = new HttpHeaders({'Content-Type': 'application/json'});

  apiUrl: string = "http://localhost:8000/api";

  constructor(private http: HttpClient){
  }

  userList(){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/users`, { headers: this.headers, observe: 'response' } ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  userCreate(data){
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiUrl}/users`, data, { headers: this.headers, observe: 'response' } ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  userUpdate(data){
    return new Promise((resolve, reject) => {
      this.http.put(`${this.apiUrl}/users/${data.id}`, data, { headers: this.headers, observe: 'response' } ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  userShow(id){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/users/${id}`, { headers: this.headers, observe: 'response' } ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  userDelete(id){
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.apiUrl}/users/${id}`, { headers: this.headers, observe: 'response' } ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}
