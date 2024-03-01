import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Students } from '../../Students';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Students> = new EventEmitter();
  name: string;
  age: number;
  student: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.name) {
      alert('Please add a student!');
      return;
    }

    if (this.age > 125) {
      alert('Age cannot be greater than 125.');
      return;
    }

    const newTask: Students = {
      name: this.name,
      age: this.age,
      studnet: this.student,
    };

    this.onAddTask.emit(newTask);

    this.name = '';
    this.age = 0;
    this.student = false;
  }
}
