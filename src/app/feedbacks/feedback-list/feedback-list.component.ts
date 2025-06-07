import { Component, EventEmitter, inject, input, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IFeedBack } from '../../shared/models/feedbacks.model';

@Component({
  selector: 'app-feedback-list',
  imports: [
        EmptyComponent,
        FontAwesomeModule,
        LoadingComponent,
    RouterLink
  ],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.scss'
})
export class FeedbackListComponent {

    // properties
  plusIcon = faPlus;
  upVoteIcon = faChevronUp;
  commentIcon = faComment;

  // signals
  feedBacks = input<IFeedBack[]>([]);
  isLoading = input<boolean>(false);

  @Output() upVoteEmit = new EventEmitter<IFeedBack>();

  onUpVote(feedback: IFeedBack) {
    // look for upvote property in feedback and increment it
    const upvotedFeedback = { ...feedback, upvotes: (feedback.upvotes || 0) + 1 };
    this.upVoteEmit.emit(upvotedFeedback);
    return;
   }
  
}
