import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export type TaskStatusOptionsType ={
  value: 'open' | 'in-progress' | 'done', 
  taskStatus: TaskStatus, 
  text: string
}[]
export const TASK_STATUS_OPEN = new InjectionToken<TaskStatusOptionsType>('task-status-open');
// build an object that will be used to display the task status in the UI - by injection
export const TaskStatusOptions: TaskStatusOptionsType = [
  { value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
  { value: 'in-progress', 
    taskStatus: 'IN_PROGRESS', 
    text: 'In-Progress'
  },
  { value: 'done', 
    taskStatus: 'DONE', 
    text: 'Completed'
  }
];

export const taksStatusOptionsProvider : Provider = {
  provide: TASK_STATUS_OPEN,
  useValue: TaskStatusOptions
}

