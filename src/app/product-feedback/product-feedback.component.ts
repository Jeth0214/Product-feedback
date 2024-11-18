import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { CategoryComponent } from "../category/category.component";
import { RoadmapComponent } from '../roadmap/roadmap.component';


@Component({
  selector: 'app-product-feedback',
  standalone: true,
  imports: [
    ToolbarComponent,
    SuggestionsComponent,
    RoadmapComponent,
    CategoryComponent
  ],
  templateUrl: './product-feedback.component.html',
  styleUrl: './product-feedback.component.scss'
})
export class ProductFeedbackComponent {
  title = 'Frontend Mentor';
  isOpen = false;
  menuIcon = '../assets/shared/mobile/icon-hamburger.svg';

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
   this.menuIcon =  !this.isOpen ? '../assets/shared/mobile/icon-hamburger.svg' : '../assets/shared/mobile/icon-close.svg';
  }
}
