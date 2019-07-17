import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NotFoundComponent,
  ]
})
export class SharedModule {}
