import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

  }

}