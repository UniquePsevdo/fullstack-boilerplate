import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../core/services/title-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = [
    { description: 'Task 1', dueDate: Date.now(), actions: 1 },
    { description: 'Task 2', dueDate: Date.now(), actions: 2 },
    { description: 'Task 3', dueDate: Date.now(), actions: 3 },
    { description: 'Task 4', dueDate: Date.now(), actions: 4 },
  ]

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Task list');
  }

  ngOnInit() {
  }

  deleteTask(event, value) {}

}
