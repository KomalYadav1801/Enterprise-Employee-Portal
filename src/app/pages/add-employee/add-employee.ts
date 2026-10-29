import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployeeComponent {

  employee = {
    employeeId: '',
    fullName: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    joiningDate: '',
    gender: '',
    address: ''
  };

  saveEmployee() {
    console.log(this.employee);
    alert('Employee Added Successfully!');
  }

  resetForm() {
    this.employee = {
      employeeId: '',
      fullName: '',
      email: '',
      phone: '',
      department: '',
      designation: '',
      salary: '',
      joiningDate: '',
      gender: '',
      address: ''
    };
  }


}
