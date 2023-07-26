import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private apiUrl = 'http://localhost:8081/api/employees';
  private apiUrl = 'http://127.0.0.1:8080/employees-0.0.1-SNAPSHOT/api/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: String): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + '/' + id);
  }
}
