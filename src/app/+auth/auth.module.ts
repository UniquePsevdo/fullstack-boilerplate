import { NgModule } from '@angular/core';
import {
  AuthModule,
  AUTH_SERVICE,
  PUBLIC_FALLBACK_PAGE_URI,
  PROTECTED_FALLBACK_PAGE_URI
} from 'ngx-auth';

import { TokenStorage } from '../core/services/token-storage.service';
import { AuthenticationService } from '../core/services/authentication.service';

import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

export function factory(authenticationService: AuthenticationService) {
  return authenticationService;
}

@NgModule({
  imports: [
    AuthModule,
    SharedModule,
    AuthRoutingModule,
  ],
  providers: [
    TokenStorage,
    AuthenticationService,
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    {
      provide: AUTH_SERVICE,
      deps: [ AuthenticationService ],
      useFactory: factory
    }
  ],
  declarations: [ LoginComponent ]
})
export class AuthenticationModule {}
