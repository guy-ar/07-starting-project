import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: "root"
})
export class TaskService {
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly(); // expose the signal as a readonly signal

    addTask(taskData: { title: string; description: string }) {   
        const newTask :Task = {
            ...taskData, // concetnate the taskData object
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update(oldTasks => [...oldTasks, newTask]); // update the signal as a copy of existing array + new task
    }
}
