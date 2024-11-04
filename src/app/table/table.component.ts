import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  employees : any[]=[];  // Initialize an empty array to hold employee data.

  constructor(private router: Router) {
    this.loadEmployees(); // Load employees from local storage on component init
  }
  loadEmployees() {
    this.employees = JSON.parse(localStorage.getItem('employees') || '[]'); // Load employee data
  }

  editEmployee(index: number) {
    this.router.navigate(['/form', index]); // Navigate to form with the employee index for editing
  }

  deleteEmployee(index: number) {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.splice(index, 1); // Remove employee from the array
    localStorage.setItem('employees', JSON.stringify(employees)); // Update local storage
    this.loadEmployees(); // Reload employee list
  }
}