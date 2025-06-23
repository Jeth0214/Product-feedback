import { Component,  computed,  effect,  inject, signal } from '@angular/core';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { FeedbackCommentFormComponent } from './feedback-comment-form/feedback-comment-form.component';
import { AuthService } from '../shared/services/auth.service';
import { IComment } from '../shared/models/comment.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IUser } from '../shared/models/user.model';
import { LoadingService } from '../shared/services/loading.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { UpvoteButtonComponent } from '../shared/components/upvote-button/upvote-button.component';

@Component({
    selector: 'app-feedback-details',
  imports: [
    RouterLink,
    FontAwesomeModule,
    FeedbackCommentsComponent,
    FeedbackCommentFormComponent,
    LoadingComponent,
    EmptyComponent,
    UpvoteButtonComponent
  ],
    templateUrl: './feedback-details.component.html',
    styleUrl: './feedback-details.component.scss'
})
export class FeedbackDetailsComponent {

   // Injections
  private _activatedRoute = inject(ActivatedRoute);
  private _authService = inject(AuthService);
  private _feedbackService = inject(FeedBackService);
  private _router = inject(Router);
  private _toastrService = inject(ToastrService);
  _loadingService = inject(LoadingService);


  // properties
  upVoteIcon:IconDefinition = faChevronUp;
  id: number = 0;
  isLoading: boolean = false;

  // signals
  feedBack = this._feedbackService.selectedFeedBack;
  comments = computed(() => { return this.feedBack().comments ? this.feedBack().comments : [] })

  constructor() {
    this.getFeedBack();
  }
  
  getFeedBack() {
    // use paramMap to get feedback id dynamically
      this._activatedRoute.paramMap.subscribe( (param: ParamMap) => { 
        const feedBackID = param.get('id');
      if (feedBackID) {
        this.id = +feedBackID;
        this._feedbackService.getFeedBackById(this.id)
      } 
    })
  }

}

