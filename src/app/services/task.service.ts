import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from '../Students';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/students';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Students[]> {
    return this.http.get<Students[]>(this.apiUrl);
  }

  deleteTask(student: Students): Observable<Students> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.delete<Students>(url);
  }

  updateTaskReminder(student: Students): Observable<Students> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<Students>(url, student, httpOptions);
  }

  addTask(student: Students): Observable<Students> {
    return this.http.post<Students>(this.apiUrl, student, httpOptions);
  }
}
