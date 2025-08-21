import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'client-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Client App Shell</h1>
    <nav>
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
    </nav>
    <router-outlet />
  `,
  styles: [`
    h1 { font: 24px/1.2 sans-serif; margin: 0 0 1rem; }
    nav a { margin-right: 1rem; }
    .active { text-decoration: underline; }
  `]
})
export class AppComponent {}