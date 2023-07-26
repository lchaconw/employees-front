import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  searchInput: string = '';
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    if (this.searchInput === '') {
      this.employeeService.getAllEmployees().subscribe({
        next: (data: Employee[]) => {
          this.employees = data;
          this.filteredEmployees = this.employees;
        },
        error: error => {
          console.error('Error fetching employees:', error);
        }
      }
      );
    } else {
      this.employeeService.getEmployeeById(this.searchInput).subscribe({
        next: (data: Employee) => {
          this.employees = [data];
          this.filteredEmployees = this.employees;
        },
        error: error => {
          console.error('Error fetching employee:', error);
        }
      });
    }
  }

  searchEmployees() {
    this.getEmployees();
  }
}
