import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

// @Injectable({
//   providedIn: "root"
// })
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

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update(oldTasks => oldTasks.map(task => { // map is a built in function that operates on array and produce a new array
            if(task.id === taskId) {
                return {
                    ...task, // copy the old task
                    status: newStatus
                };
            }
            return task; // if not changed return the task as it is
        }))
    }
}
