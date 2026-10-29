import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsComponent } from '../../components/charts/charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ChartsComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  // ===============================
  // HEADER
  // ===============================

  adminName = 'Admin User';
  role = 'Administrator';

  currentDate = '20 May 2026';

  // ===============================
  // STATISTICS
  // ===============================

  totalEmployees = 500;

  presentToday = 480;

  absentToday = 20;

  monthlyPayroll = '₹15,00,000';

  pendingLeaves = 15;

  // ===============================
  // DEPARTMENT DATA
  // ===============================

  departments = [

    {
      name: 'IT',
      employees: 180,
      color: '#3b82f6'
    },

    {
      name: 'HR',
      employees: 110,
      color: '#10b981'
    },

    {
      name: 'Finance',
      employees: 90,
      color: '#f59e0b'
    },

    {
      name: 'Marketing',
      employees: 60,
      color: '#8b5cf6'
    },

    {
      name: 'Sales',
      employees: 60,
      color: '#ec4899'
    }

  ];

  // ===============================
  // EMPLOYEES
  // ===============================

  recentEmployees = [

    {
      id: 101,
      name: 'Rahul Sharma',
      department: 'IT',
      designation: 'Software Developer',
      status: 'Active',
      joining: '12 Jan 2025',
      image: 'https://i.pravatar.cc/150?img=1'
    },

    {
      id: 102,
      name: 'Neha Verma',
      department: 'HR',
      designation: 'HR Manager',
      status: 'Active',
      joining: '18 Mar 2025',
      image: 'https://i.pravatar.cc/150?img=12'
    },

    {
      id: 103,
      name: 'Aman Gupta',
      department: 'Finance',
      designation: 'Accountant',
      status: 'Active',
      joining: '25 Feb 2025',
      image: 'https://i.pravatar.cc/150?img=14'
    },

    {
      id: 104,
      name: 'Pooja Singh',
      department: 'Marketing',
      designation: 'Marketing Executive',
      status: 'Active',
      joining: '05 Apr 2025',
      image: 'https://i.pravatar.cc/150?img=16'
    },

    {
      id: 105,
      name: 'Vikram Patel',
      department: 'IT',
      designation: 'System Analyst',
      status: 'Inactive',
      joining: '11 Feb 2025',
      image: 'https://i.pravatar.cc/150?img=19'
    }

  ];

  // ===============================
  // BIRTHDAYS
  // ===============================

  birthdays = [

    {
      name: 'Rahul Sharma',
      role: 'Software Developer',
      date: '21 May',
      image: 'https://i.pravatar.cc/100?img=5'
    },

    {
      name: 'Neha Verma',
      role: 'HR Manager',
      date: '24 May',
      image: 'https://i.pravatar.cc/100?img=12'
    },

    {
      name: 'Aman Gupta',
      role: 'Accountant',
      date: '26 May',
      image: 'https://i.pravatar.cc/100?img=20'
    }

  ];

  // ===============================
  // ANNOUNCEMENTS
  // ===============================

  announcements = [

    {
      title: 'Annual Meeting',
      message: 'Annual company meeting on 25 August 2026 at 10:00 AM.'
    },

    {
      title: 'Holiday Notice',
      message: 'Office will remain closed on 15 August.'
    },

    {
      title: 'HR Policy',
      message: 'Updated HR policy is available on the employee portal.'
    }

  ];

  // ===============================
  // LEAVE REQUESTS
  // ===============================

  leaveRequests = [

    {
      name: 'Rahul Sharma',
      days: 2,
      reason: 'Medical Leave'
    },

    {
      name: 'Neha Verma',
      days: 3,
      reason: 'Vacation'
    },

    {
      name: 'Aman Gupta',
      days: 1,
      reason: 'Personal Work'
    },

    {
      name: 'Pooja Singh',
      days: 5,
      reason: 'Family Function'
    }

  ];

  // ===============================
  // QUICK ACTIONS
  // ===============================

  quickActions = [

    {
      title: 'Add Employee',
      icon: '👤'
    },

    {
      title: 'Attendance',
      icon: '📅'
    },

    {
      title: 'Payroll',
      icon: '💰'
    },

    {
      title: 'Departments',
      icon: '🏢'
    },

    {
      title: 'Reports',
      icon: '📊'
    },

    {
      title: 'Settings',
      icon: '⚙️'
    }

  ];

  // ===============================
  // PAYROLL
  // ===============================

  payroll = {

    total: '₹15,25,000',

    paid: '₹14,20,000',

    pending: '₹1,05,000'

  };

  // ===============================
  // ATTENDANCE
  // ===============================

  attendance = {

    percentage: 96,

    present: 480,

    absent: 20

  };

}