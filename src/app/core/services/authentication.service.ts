import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from 'ngx-auth';

import { TokenStorage } from './token-storage.service';

interface AccessData {
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

@Injectable()
export class AuthenticationService implements AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {}

  public isAuthorized(): Observable < boolean > {
    return this.tokenStorage
      .getAccessToken()
      .pipe(map(token => !!token));
  }

  public getAccessToken(): Observable < string > {
    return this.tokenStorage.getAccessToken();
  }

  public refreshToken(): Observable <AccessData> {
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
        switchMap((refreshToken: string) =>
          // todo: environment variable
          this.http.get(`http://localhost:3000/api/v1/token/refresh`)
        ),
        tap((data: AccessData) => this.saveAccessData(data)),
        catchError((err) => {
          this.logout();

          return throwError(err);
        })
      );
  }

  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  public login(body: {email: string, password: string}): Observable<any> {
    // todo: environment variable
    return this.http.post(`http://localhost:3000/api/v1/user/login`, body)
      .pipe(tap((data: AccessData) => this.saveAccessData(data)));
  }

  public logout(): void {
    this.tokenStorage.clear();
    location.reload();
  }

  private saveAccessData(data: AccessData) {
    this.tokenStorage
      .setAccessToken(data.tokens.access_token)
      .setRefreshToken(data.tokens.refresh_token);
  }

}
