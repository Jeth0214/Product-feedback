import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faComment } from '@fortawesome/free-solid-svg-icons';
import { EmptyComponent } from '../../../shared/components/empty/empty.component';
import { FeedbackCardComponent } from '../../../shared/components/feedback-card/feedback-card.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { IFeedBack } from '../../../shared/models/feedbacks.model';


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
