import { Component,  computed, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { AuthService } from '../shared/services/auth.service';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { LoadingService } from '../shared/services/loading.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { FeedbackCardComponent } from '../shared/components/feedback-card/feedback-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { finalize } from 'rxjs';
import { CommentComponent } from './components/comment/comment.component';

@Component({
    selector: 'app-feedback-details',
  imports: [
    RouterLink,
    FontAwesomeModule,
    CommentComponent,
    LoadingComponent,
    FeedbackCardComponent,
    CommentFormComponent
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
  id: number = 0;
  isLoading: boolean = false;
  isAddingComment: boolean = false;


  // signals
  feedBack = this._feedbackService.selectedFeedBack;
  currentUser = this._authService.user;

  comments = computed(() => { return this.feedBack().comments ? this.feedBack().comments : [] });

  constructor() {
    this.getFeedBack();
  }
  
  getFeedBack() {
      this._activatedRoute.paramMap.subscribe( (param: ParamMap) => { 
        const feedBackID = param.get('id');
      if (feedBackID) {
        this.id = +feedBackID;
        this._feedbackService.getFeedBackById(this.id);
        console.log(this.currentUser());
      } 
    })
  }
  onCommentAdded(comment: string) {

    this.isAddingComment = true;

    // we need to provide id since we are not using real api
    let comments = this.comments();
    let commentId = (comments && comments.length > 0) ? comments[comments.length - 1].id + 1 : 1;

    const user = this.currentUser();
    if (!user) {
      this._toastrService.error('You must be logged in to comment.');
      return;
    }
   
    // Create a comment object
    let commentData = {
      id: commentId,
      user: user,
      content: comment,
    }

  
    this._feedbackService.updateFeedBack(this.feedBack()).pipe(
      finalize(() => {
        this.isAddingComment = false;
      })
    ).subscribe({
      next: (updatedFeedBack) => {
        if (this.feedBack().comments) {
          this.feedBack().comments!.push(commentData);
        }
        else {
          this.feedBack().comments = [commentData];
        }
    
      },
      error: (error) => {
        this._toastrService.error('Failed to add comment. Please try again later.');
      }
    })
  }


}

