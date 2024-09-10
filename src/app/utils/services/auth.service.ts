import { Injectable } from '@angular/core';
import {User} from "../types/user.type";
import {catchError, Observable, of, retry, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private alertService: AlertService) { }

  /*
  /register
  /signup
   */

  register(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/register', user).pipe(
      catchError(error => {
        alert(error.message);
        return of();
      })
    )
  }

  login(cred: Pick<User, 'email' | 'password'>): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>(this.apiUrl + '/login', cred).pipe(
      tap(res => localStorage.setItem('token', res.accessToken)),
      tap(() => this.alertService.create({text: 'Bienvenue !'})),
      catchError(error => {
        this.alertService.create({text: error.message, level: "error"});
        return of()
      })
    )
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }


}
