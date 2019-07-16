import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  providers: [
  ],
  declarations: [TaskListComponent]
})
export class TaskModule {}
