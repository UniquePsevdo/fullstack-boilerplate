import { NgModule, Optional, SkipSelf } from '@angular/core';

import { TokenStorage } from './services/token-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { TaskService } from './services/task.service';

@NgModule({
  providers: [
    TokenStorage,
    AuthenticationService,
    TaskService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
