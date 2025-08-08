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

  // injects
  _feedBackService = inject(FeedBackService);

  // signals
  category = this._feedBackService.categoryTerm;
  message = computed(() => this.category() === 'All' ? 'No feedbacks yet' : `No feedbacks in ${this.category()}` );



}
