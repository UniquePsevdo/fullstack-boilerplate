import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    TaskRoutingModule,
    NgxDatatableModule,
    SharedModule,
  ],
  providers: [],
  declarations: [TaskListComponent]
})
export class TaskModule {}
