import { Component, computed, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../../services/feedbacks.service';

@Component({
    selector: 'app-empty',
    imports: [FontAwesomeModule],
    templateUrl: './empty.component.html',
    styleUrl: './empty.component.scss'
})
export class EmptyComponent {

  plusIcon = faPlus;

  // injects
  _feedBackService = inject(FeedBackService);

  // signals
  category = this._feedBackService.categoryTerm;
  message = computed(() => this.category() === 'All' ? 'No feedbacks yet' : `No feedbacks in ${this.category()}` );



}
