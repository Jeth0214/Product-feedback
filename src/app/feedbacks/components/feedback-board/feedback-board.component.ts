import { Component, computed, EventEmitter, HostListener, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-board',
  imports: [],
  templateUrl: './feedback-board.component.html',
  styleUrl: './feedback-board.component.scss'
})
export class FeedbackBoardComponent {

    title = 'Frontend Mentor';
    isOpen = input(false);
    toggleClick =  output<boolean>();
    
  menuIcon = computed(() => {
      return !this.isOpen() ? './assets/shared/mobile/icon-hamburger.svg' : './assets/shared/mobile/icon-close.svg';
    });
  
  toggleMenu() {
      this.toggleClick.emit(this.isOpen());
    }
  
}
