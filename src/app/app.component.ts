import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CategoryComponent } from "./category/category.component";
import { RoadmapComponent } from './roadmap/roadmap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    SuggestionsComponent,
    RoadmapComponent,
    CategoryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend Mentor';

}
