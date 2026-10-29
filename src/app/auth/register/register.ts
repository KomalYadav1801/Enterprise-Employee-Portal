import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (this.name && this.email && this.password) {
      alert('Registration successful');
      this.router.navigate(['/login']);
    } else {
      alert('Fill all fields');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}