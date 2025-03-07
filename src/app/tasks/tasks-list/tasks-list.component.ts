import { taksStatusOptionsProvider, TASK_STATUS_OPEN, TaskStatus, TaskStatusOptions } from './../task.model';
import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
//import { TaskService } from '../task.service';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taksStatusOptionsProvider], // this is custom token that will be used by the element injector 
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  
//  private taskSer/vice = inject(TaskService);
  private taskService = inject(TaskServiceToken);
  taskStatusOptipoins = inject(TASK_STATUS_OPEN); // this is the value that was provided by the custom token and will be used in the template instead of the hardcoded value
  //tasks = this.taskService.allTasks;
  tasks = computed(() => { // will be called whenever the selectedFilter signal changes or the allTasks signal changes
    switch (this.selectedFilter()) {
      case 'completed':
        return this.taskService.allTasks().filter(task => task.status === 'DONE');
      case 'in-progress':
        return this.taskService.allTasks().filter(task => task.status === 'IN_PROGRESS');
      case 'open':  
        return this.taskService.allTasks().filter(task => task.status === 'OPEN');
      default:
        return this.taskService.allTasks();
    }
  });


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
