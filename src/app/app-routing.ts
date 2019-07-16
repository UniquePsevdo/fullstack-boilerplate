import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
// import { LoginComponent } from './+login/components/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { PublicGuard, ProtectedGuard } from 'ngx-auth';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    /*canActivate: [ ProtectedGuard ],*/
    children: [
      {
        path: '',
        loadChildren: () => import('./+task/task.module').then(m => m.TaskModule),
      }
    ],
    component: LayoutComponent,
  },
  {
    path: 'login',
    /*canActivate: [ PublicGuard ],*/
    loadChildren: () => import('./+login/login.module').then(m => m.LoginModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
