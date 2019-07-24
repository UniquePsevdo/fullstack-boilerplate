import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class TitleService {
  private titleSubject: ReplaySubject<string> = new ReplaySubject(1);

  get title$(): Observable<any> {
    return this.titleSubject.asObservable();
  }

  public setTitle(title: string): void {
    this.titleSubject.next(title);
  }
}
