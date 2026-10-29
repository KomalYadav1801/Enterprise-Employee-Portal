import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent implements OnInit {

  // Theme
  isDarkMode = false;

  // Language
  selectedLanguage = 'en';

  // Other Settings
  notifications = true;
  emailAlerts = true;
  autoBackup = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isDarkMode =
      localStorage.getItem('theme') === 'dark';

    this.selectedLanguage =
      localStorage.getItem('language') || 'en';

    this.notifications =
      JSON.parse(localStorage.getItem('notifications') || 'true');

    this.emailAlerts =
      JSON.parse(localStorage.getItem('emailAlerts') || 'true');

    this.autoBackup =
      JSON.parse(localStorage.getItem('autoBackup') || 'true');

    this.applyTheme();

  }

  toggleTheme(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.setItem(
      'theme',
      this.isDarkMode ? 'dark' : 'light'
    );

    this.applyTheme();

  }

  applyTheme(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

  }

  changeLanguage(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.setItem(
      'language',
      this.selectedLanguage
    );

  }

  saveSettings(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.setItem(
      'theme',
      this.isDarkMode ? 'dark' : 'light'
    );

    localStorage.setItem(
      'language',
      this.selectedLanguage
    );

    localStorage.setItem(
      'notifications',
      JSON.stringify(this.notifications)
    );

    localStorage.setItem(
      'emailAlerts',
      JSON.stringify(this.emailAlerts)
    );

    localStorage.setItem(
      'autoBackup',
      JSON.stringify(this.autoBackup)
    );

    alert('Settings Saved Successfully');

  }

}