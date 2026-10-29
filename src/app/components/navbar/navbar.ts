import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Page {
  name: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  searchText = '';

  pages: Page[] = [
    { name: 'Home', route: '/' },
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Employees', route: '/employees' },
    { name: 'Departments', route: '/departments' },
    { name: 'Attendance', route: '/attendance' },
    { name: 'Salary', route: '/salary' },
    { name: 'Reports', route: '/reports' },
    { name: 'Profile', route: '/profile' },
    { name: 'Settings', route: '/settings' },
    { name: 'Admin', route: '/admin' }
  ];

  constructor(private router: Router) {}

  searchPage(): void {

    const value = this.searchText.trim().toLowerCase();

    const page = this.pages.find(page =>
      page.name.toLowerCase().includes(value)
    );

    if (page) {
      this.router.navigateByUrl(page.route);
      this.searchText = '';
    } else {
      alert('Page not found!');
    }

  }

  goToAdmin(): void {
    this.router.navigate(['/admin']);
  }

}