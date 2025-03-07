import { TaskService } from './../task.service';
import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  //constructor(private TaskService: TaskService) {  }
  constructor(@Inject(TaskServiceToken) private taskService: TaskService) {  } // when using custom token need to add Inject decorator
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  onAddTask(title: string, description: string) {
    this.taskService.addTask({title, description});
    this.formEl()?.nativeElement.reset();
  }
}
