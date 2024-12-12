import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roadmap-main-card',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './roadmap-main-card.component.html',
  styleUrl: './roadmap-main-card.component.scss'
})
export class RoadmapMainCardComponent {
    title: string = "Roadmap";
  circleIcon = faCircle;

}
