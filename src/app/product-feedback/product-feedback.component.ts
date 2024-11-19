import { Component, HostListener } from '@angular/core';
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
   this.changeIcon()
  }

  // Always set the menu to its default state when resizing the screen width
  @HostListener('window:resize', [])
  onResize() { 
    if (window.innerWidth <= 768) {
      this.isOpen = false;
      this.changeIcon();
      }
  }

  changeIcon() {
      this.menuIcon =  !this.isOpen ? './assets/shared/mobile/icon-hamburger.svg' : './assets/shared/mobile/icon-close.svg';
  }
  
}
