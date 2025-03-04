import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: "root"
})
export class TaskService {
    tasks = signal<Task[]>([]);

    addTask(taskData: { title: string; description: string }) {   
        const newTask :Task = {
            ...taskData, // concetnate the taskData object
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update(oldTasks => [...oldTasks, newTask]); // update the signal as a copy of existing array + new task
    }
}
