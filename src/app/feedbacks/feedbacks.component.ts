import { Component, inject, signal } from '@angular/core';
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
  feedBacks = signal<IFeedBack[]>([]);
  // Injections
  _feedBackService = inject(FeedBackService);

  constructor() {
   this.getFeedBacks();
  }

  async getFeedBacks() {
    try {
      const feedBacks = await this._feedBackService.getAllFeedBacks();
      this.feedBacks.set(feedBacks);
    } catch (error) {
      console.log(error);
    }
  }



}
