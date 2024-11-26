import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { finalize } from 'rxjs';

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
  commentIcon = faComment;
  feedBacks: IFeedBack[] = [];
  isLoading = false;
  // Injections
  _feedBackService = inject(FeedBackService);

  constructor() {
   this.getFeedBacks();
  }

  getFeedBacks() {
    this.isLoading = true;
    
    this._feedBackService.getFeedBacks().pipe(
       finalize(() => {this.isLoading = false})
    ).subscribe(
      {
        next: feedBacks => this.feedBacks = feedBacks,
        error: error => { console.error(error); this.feedBacks = []; }
       }
     );
  }



}
