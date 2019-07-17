import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  imports: [
    TaskRoutingModule,
    NgxDatatableModule,
  ],
  providers: [],
  declarations: [TaskListComponent]
})
export class TaskModule {}
