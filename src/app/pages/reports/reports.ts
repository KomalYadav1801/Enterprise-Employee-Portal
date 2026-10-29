import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  // ======================
  // Dashboard Cards
  // ======================

  cards = [
    {
      title: 'Total Employees',
      value: 254,
      icon: '👥',
      growth: '+12%',
      router: '/employees'
    },
    {
      title: 'Departments',
      value: 18,
      icon: '🏢',
      growth: '+5%',
      router: '/departments'
    },
    {
      title: 'Attendance',
      value: '96%',
      icon: '📅',
      growth: '+2%',
      router: '/attendance'
    },
    {
      title: 'Monthly Salary',
      value: '₹12,50,000',
      icon: '💰',
      growth: '-1%',
      router: '/salary'
    }
  ];

  // ======================
  // Monthly Summary
  // ======================

  summary = {
    joined: 12,
    left: 2,
    attendance: '96%',
    salary: '₹12,50,000'
  };

  // ======================
  // Department Report
  // ======================

  departments = [

    {
      name: 'IT Department',
      employees: 80,
      progress: 90
    },

    {
      name: 'Human Resource',
      employees: 22,
      progress: 45
    },

    {
      name: 'Finance',
      employees: 30,
      progress: 60
    },

    {
      name: 'Marketing',
      employees: 57,
      progress: 75
    },

    {
      name: 'Sales',
      employees: 65,
      progress: 85
    }

  ];

  // ======================
  // Top Employees
  // ======================

  topEmployees = [

    {
      name: 'Rahul Sharma',
      department: 'IT',
      attendance: '99%',
      performance: '★★★★★'
    },

    {
      name: 'Priya Singh',
      department: 'HR',
      attendance: '98%',
      performance: '★★★★★'
    },

    {
      name: 'Amit Kumar',
      department: 'Finance',
      attendance: '97%',
      performance: '★★★★☆'
    },

    {
      name: 'Neha Patel',
      department: 'Sales',
      attendance: '96%',
      performance: '★★★★☆'
    },

    {
      name: 'Rohit Verma',
      department: 'Marketing',
      attendance: '95%',
      performance: '★★★★☆'
    }

  ];

  // ======================
  // Recent Activities
  // ======================

  activities = [

    '🟢 Rahul Sharma joined the IT Department.',

    '💰 Monthly salary generated successfully.',

    '📅 Attendance report updated.',

    '🏆 Employee of the Month announced.',

    '📈 Company performance increased by 12%.',

    '🎉 15 employees completed training.'

  ];

  // ======================
  // Salary Report
  // ======================

  salary = {

    totalPaid: '₹12,50,000',

    pending: '₹80,000',

    bonus: '₹1,40,000'

  };

  // ======================
  // Downloads
  // ======================

  downloads = [

    'Employee Report',

    'Attendance Report',

    'Salary Report',

    'Department Report'

  ];

  // ======================
  // Export Buttons
  // ======================

  exportPDF() {

    alert('Export PDF feature coming soon.');

  }

  exportExcel() {

    alert('Export Excel feature coming soon.');

  }

  printReport() {

    window.print();

  }

}