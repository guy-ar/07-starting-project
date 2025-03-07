import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent], // these "chilkd components" have access to the same instance of the service
  //providers: [TaskService], // inseted injectable by root - this is element injector
})
export class TasksComponent {}
