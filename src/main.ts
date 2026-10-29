import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app';

import * as AOS from 'aos';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}).catch(err => console.error(err));