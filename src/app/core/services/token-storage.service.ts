import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStorage {

  public getAccessToken(): Observable<string> {
    const token: string = localStorage.getItem('access_token');
    return of(token);
  }

  public getRefreshToken(): Observable<string> {
    const token: string = localStorage.getItem('refresh_token');
    return of(token);
  }

  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem('access_token', token);
    return this;
  }

  public setRefreshToken(token: string): TokenStorage {
    localStorage.setItem('refresh_token', token);
    return this;
  }

  public clear() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
