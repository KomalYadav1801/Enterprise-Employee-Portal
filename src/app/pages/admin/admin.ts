import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent {

  constructor(private router: Router) {}

  editProfile(): void {
    this.router.navigate(['/profile']);
  }

  changePassword(): void {
    this.router.navigate(['/change-password']);
  }

  logout(): void {
    localStorage.clear();
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }

}