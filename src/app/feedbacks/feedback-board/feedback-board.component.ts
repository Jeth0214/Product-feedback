import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-board',
  imports: [],
  templateUrl: './feedback-board.component.html',
  styleUrl: './feedback-board.component.scss'
})
export class FeedbackBoardComponent {

    title = 'Frontend Mentor';
    isOpen = false;
    menuIcon = './assets/shared/mobile/icon-hamburger.svg';
    @Output()isMenuOpen =  new EventEmitter<boolean>();
    
  
    toggleMenu() {
    this.isOpen = !this.isOpen;
      this.changeIcon();
      this.emitMenuState();
    }
  
    // Always set the menu to its default state when resizing the screen width
    @HostListener('window:resize', [])
    onResize() { 
      if (window.innerWidth <= 768) {
        this.isOpen = false;
        this.changeIcon();
        this.emitMenuState();
        }
    }
  
    changeIcon() {
        this.menuIcon =  !this.isOpen ? './assets/shared/mobile/icon-hamburger.svg' : './assets/shared/mobile/icon-close.svg';
    }
  
  emitMenuState() { 
    this.isMenuOpen.emit(this.isOpen);
  }

}
