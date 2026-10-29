import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  email: string;
  phone: string;
  status: string;
  joinDate: string;
  image: string;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css']
})
export class Employees {

  searchText = '';
  selectedDepartment = '';
  selectedStatus = '';

  totalEmployees = 7;
  activeEmployees = 5;
  leaveEmployees = 1;
  inactiveEmployees = 1;

  employees: Employee[] = [
    {
      id: 101,
      name: 'Rahul Sharma',
      department: 'IT',
      designation: 'Software Developer',
      email: 'rahul@company.com',
      phone: '9876543210',
      status: 'Active',
      joinDate: '2025-01-10',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 102,
      name: 'Priya Patel',
      department: 'HR',
      designation: 'HR Manager',
      email: 'priya@company.com',
      phone: '9876543211',
      status: 'Leave',
      joinDate: '2024-11-05',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 103,
      name: 'Amit Kumar',
      department: 'Finance',
      designation: 'Accountant',
      email: 'amit@company.com',
      phone: '9876543212',
      status: 'Active',
      joinDate: '2024-08-18',
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 104,
      name: 'Neha Verma',
      department: 'Marketing',
      designation: 'Marketing Executive',
      email: 'neha@company.com',
      phone: '9876543213',
      status: 'Active',
      joinDate: '2024-07-01',
      image: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: 105,
      name: 'Rohit Singh',
      department: 'Sales',
      designation: 'Sales Executive',
      email: 'rohit@company.com',
      phone: '9876543214',
      status: 'Inactive',
      joinDate: '2023-09-12',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 106,
      name: 'Pooja Gupta',
      department: 'Operations',
      designation: 'Operations Manager',
      email: 'pooja@company.com',
      phone: '9876543215',
      status: 'Active',
      joinDate: '2024-06-20',
      image: 'https://i.pravatar.cc/150?img=6'
    },
    {
      id: 107,
      name: 'Arjun Mehta',
      department: 'Customer Support',
      designation: 'Support Engineer',
      email: 'arjun@company.com',
      phone: '9876543216',
      status: 'Active',
      joinDate: '2025-02-11',
      image: 'https://i.pravatar.cc/150?img=7'
    }
  ];

  newEmployee: Employee = {
    id: 0,
    name: '',
    department: '',
    designation: '',
    email: '',
    phone: '',
    status: 'Active',
    joinDate: '',
    image: ''
  };

  addEmployee() {

    if (
      !this.newEmployee.id ||
      !this.newEmployee.name ||
      !this.newEmployee.department ||
      !this.newEmployee.designation ||
      !this.newEmployee.email
    ) {
      alert('Please fill all required fields.');
      return;
    }

    if (!this.newEmployee.image) {
      this.newEmployee.image = 'https://i.pravatar.cc/150';
    }

    this.employees.push({ ...this.newEmployee });

    this.calculateStats();

    this.newEmployee = {
      id: 0,
      name: '',
      department: '',
      designation: '',
      email: '',
      phone: '',
      status: 'Active',
      joinDate: '',
      image: ''
    };

  }

  deleteEmployee(index: number) {

    if (confirm('Delete Employee?')) {

      this.employees.splice(index, 1);

      this.calculateStats();

    }

  }

  calculateStats() {

    this.totalEmployees = this.employees.length;

    this.activeEmployees = this.employees.filter(
      x => x.status === 'Active'
    ).length;

    this.leaveEmployees = this.employees.filter(
      x => x.status === 'Leave'
    ).length;

    this.inactiveEmployees = this.employees.filter(
      x => x.status === 'Inactive'
    ).length;

  }

  resetFilters() {

    this.searchText = '';
    this.selectedDepartment = '';
    this.selectedStatus = '';

  }

}