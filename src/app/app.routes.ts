import { Routes } from '@angular/router';

// Home
import { Home } from './home/home';

// Authentication
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

// Layout
import { MainLayout } from './layouts/main-layout/main-layout';

// Pages
import { Dashboard } from './pages/dashboard/dashboard';
import { Employees } from './pages/employees/employees';
import { AddEmployeeComponent } from './pages/add-employee/add-employee';
import { Departments } from './pages/departments/departments';
import { Attendance } from './pages/attendance/attendance';
import { Salary } from './pages/salary/salary';
import { Reports } from './pages/reports/reports';
import { Profile } from './pages/profile/profile';
import { SettingsComponent } from './pages/settings/settings';
import { AdminComponent } from './pages/admin/admin';
import { ChangePasswordComponent } from './pages/change-password/change-password';

export const routes: Routes = [

  // Home Page
  {
    path: '',
    component: Home
  },

  // Authentication
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // Main Layout
  {
    path: '',
    component: MainLayout,

    children: [

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'employees',
        component: Employees
      },

      // ✅ Add Employee Page
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      },

      {
        path: 'departments',
        component: Departments
      },

      {
        path: 'attendance',
        component: Attendance
      },

      {
        path: 'salary',
        component: Salary
      },

      {
        path: 'reports',
        component: Reports
      },

      {
        path: 'profile',
        component: Profile
      },

      {
        path: 'settings',
        component: SettingsComponent
      },

      {
        path: 'admin',
        component: AdminComponent
      },

      {
        path: 'change-password',
        component: ChangePasswordComponent
      }

    ]

  },

  // Invalid Route
  {
    path: '**',
    redirectTo: ''
  }

];