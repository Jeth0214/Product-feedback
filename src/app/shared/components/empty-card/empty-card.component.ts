import { Component, computed, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../../services/feedbacks.service';

@Component({
    selector: 'app-empty-card',
    imports: [FontAwesomeModule],
    templateUrl: './empty-card.component.html',
    styleUrl: './empty-card.component.scss'
})
export class EmptyCardComponent {

  plusIcon = faPlus;

  title = input.required<string>();
  showMessage = input(true);
  showAddButton = input(true);


}
