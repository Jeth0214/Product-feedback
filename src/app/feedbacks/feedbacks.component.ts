import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [EmptyComponent ,   FontAwesomeModule , LoadingComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
 
  // properties
  plusIcon = faPlus;
  upVoteIcon = faChevronUp;
  commentIcon = faComment;
  feedBacks: IFeedBack[] = [];
  // Injections
  _feedBackService = inject(FeedBackService);

  constructor() {
   this.getFeedBacks();
  }

  getFeedBacks() {
    
    this._feedBackService.getFeedBacks().subscribe(
      {
        next: feedBacks => this.feedBacks = feedBacks,
        error: error => { console.error(error); this.feedBacks = []; }
       }
     );
  }



}
