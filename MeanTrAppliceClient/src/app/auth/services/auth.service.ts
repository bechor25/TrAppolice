
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap, mapTo, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  redirectUrl: string;


  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('AuthService');

    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
}

  signup(data: User) {
    return this.http.post(`${this.apiUrl}/signup`, data, this.httpOptions)
    .pipe(
      catchError(this.handleError('signup', null))
    )
  }

  login(data: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/login`, data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
      catchError(this.handleError('login', false))
    )
  }

  doLogin(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
    return user;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getDecodeToken(token: string) {
    return jwt_decode(token);
  }


  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

}
