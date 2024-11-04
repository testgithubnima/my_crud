import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  employee: any = { name: '', email: '', position: '' }; // Object to hold employee data
  isEditing: boolean = false; // Flag to check if we are editing
  constructor(private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    // Check if an employee ID is passed for editing
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true; // Set editing mode
      const employees = JSON.parse(localStorage.getItem('employees') || '[]');
      this.employee = employees[parseInt(id, 10)]; // Load the employee data for editing
    }
  }
  onSubmit(form: any) {
    const newEmployee = {
      name: form.value.name,
      email: form.value.email,
      position: form.value.position
    };
    
      console.log('Submitting new employee:', newEmployee);  // Log the new employee

      const storedEmployees=JSON.parse(localStorage.getItem('employees') || '[]');
         // Retrieve existing employees from local storage

         if (this.isEditing) {
          // Update existing employee
          const id = this.route.snapshot.paramMap.get('id');
          if (id) {
            storedEmployees[parseInt(id, 10)] = newEmployee; // Update employee in the array
          }
        } else {
          // Add new employee
          storedEmployees.push(newEmployee); // Add new employee
        }

        localStorage.setItem('employees', JSON.stringify(storedEmployees));
        this.router.navigate(['/table']); // Redirect to table view
      }

  }


