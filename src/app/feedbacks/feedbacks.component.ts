import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [    FontAwesomeModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
 
  // properties
  plusIcon = faPlus;
  upVoteIcon = faChevronUp;
  feedBacks: IFeedBack[] = [];
  
  // Injections
  _feedBackService = inject(FeedBackService);

  constructor() {
    this._feedBackService.getFeedBacks().subscribe(feedBacks => this.feedBacks = feedBacks);
  }



}
