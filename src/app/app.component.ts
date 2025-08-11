import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  title = 'Frontend Mentor';

  ngOnInit() { 
    // Challenge has no login feture, so we will initialize the auth service here
    this.authService.loadUserFromStorage();
  }
}
