import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Navigate to Login Page
  login(): void {
    this.router.navigate(['/login']);
  }

  // Reusable Smooth Scroll
  private scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Home
  goHome(): void {
    this.scrollToSection('home');
  }

  // About
  goAbout(): void {
    this.scrollToSection('about');
  }

  // Services
  goServices(): void {
    this.scrollToSection('services');
  }

  // Features
  goFeatures(): void {
    this.scrollToSection('features');
  }

  // Contact
  goContact(): void {
    this.scrollToSection('contact');
  }

}

