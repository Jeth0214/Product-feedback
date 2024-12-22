import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { ToastrService } from 'ngx-toastr';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [EmptyComponent ,   FontAwesomeModule , LoadingComponent, RouterLink],
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
  _toastrService = inject(ToastrService);

  constructor() {
   this.getFeedBacks();
  }

  async getFeedBacks() {
    try {
      const feedBacks = await this._feedBackService.getAllFeedBacks();
      this.feedBacks.set(feedBacks);
    } catch (error) {
      const errorMessage = ( error as HttpErrorResponse ).message || 'Unknown error';
      this._toastrService.error(errorMessage, 'Error');
    }
  }



}
