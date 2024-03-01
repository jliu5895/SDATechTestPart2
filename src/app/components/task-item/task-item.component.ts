import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Students } from '../../Students';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() student: Students;
  @Output() onDeleteTask: EventEmitter<Students> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Students> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(student) {
    this.onDeleteTask.emit(student);
  }

  onToggle(student) {
    this.onToggleReminder.emit(student);
  }
}
