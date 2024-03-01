import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Students } from '../../Students';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  students: Students[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((students) => (this.students = students));
  }

  deleteTask(student: Students) {
    this.taskService
      .deleteTask(student)
      .subscribe(
        () => (this.students = this.students.filter((t) => t.id !== student.id))
      );
  }

  toggleReminder(student: Students) {
    student.student = !student.student;
    this.taskService.updateTaskReminder(student).subscribe();
  }

  addTask(student: Students) {
    this.taskService.addTask(student).subscribe((student) => this.students.push(student));
  }
}
