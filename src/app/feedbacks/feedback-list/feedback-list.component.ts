import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { UpvoteButtonComponent } from "../../shared/components/upvote-button/upvote-button.component";
import { FeedbackCardComponent } from '../../shared/components/feedback-card/feedback-card.component';

@Component({
  selector: 'app-feedback-list',
  imports: [
    EmptyComponent,
    FontAwesomeModule,
    LoadingComponent,
    FeedbackCardComponent
],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.scss'
})
export class FeedbackListComponent {

    // properties
  plusIcon = faPlus;
  commentIcon = faComment;

  // signals
  feedBacks = input<IFeedBack[]>([]);
  isLoading = input<boolean>(false);

  
}
