import { Component, HostListener } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CategoryComponent } from "../category/category.component";
import { FeedbacksComponent } from '../feedbacks/feedbacks.component';
import { RoadmapMainCardComponent } from '../roadmap/roadmap-main-card/roadmap-main-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    RoadmapMainCardComponent,
    CategoryComponent,
    FeedbacksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    title = 'Frontend Mentor';
    isOpen = false;
    menuIcon = './assets/shared/mobile/icon-hamburger.svg';
  
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
