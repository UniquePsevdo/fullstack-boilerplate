import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = [
    { description: 'Task 1', dueDate: Date.now(), id: 1 },
    { description: 'Task 1', dueDate: Date.now(), id: 2 },
    { description: 'Task 1', dueDate: Date.now(), id: 3 },
    { description: 'Task 1', dueDate: Date.now(), id: 4 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
