import { Component,  computed, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../shared/services/auth.service';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { FeedbackCardComponent } from '../shared/components/feedback-card/feedback-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { finalize } from 'rxjs';
import { countComment } from '../shared/functions/countComment';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { Location } from '@angular/common';

@Component({
    selector: 'app-feedback-details',
  imports: [
    RouterLink,
    FontAwesomeModule,
    LoadingComponent,
    FeedbackCardComponent,
    CommentFormComponent,
    CommentListComponent
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
  private  location = inject(Location);


  // properties
  id: number = 0;
  isLoading: boolean = false;
  isAddingComment: boolean = false;
  isDeletingFeedBack: boolean = false;


  // signals
  feedBack = this._feedbackService.selectedFeedBack;
  isFetchingSelectedFeedBack = this._feedbackService.isFetchingSelectedFeedBack;
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

    let feedBack = this.feedBack();
    if (!feedBack.comments) {
      feedBack.comments = [];
      feedBack.comments.push(commentData);
    }
    else {
      feedBack.comments.push(commentData);
    }

  
    this._feedbackService.updateFeedBack(feedBack).pipe(
      finalize(() => {
        this.isAddingComment = false;
      })
    ).subscribe({
      next: () => {
      },
      error: (error) => {
        this._toastrService.error('Failed to add comment. Please try again later.');
      }
    })
  }

  onDeleteFeedBack() {
    let id = this.feedBack().id;
    this.isDeletingFeedBack = true;
  

    this._feedbackService.deleteFeedBack(id).pipe(
      finalize(() => {
        this.isDeletingFeedBack = false;
      })
    ).subscribe({
      next: () => {
        this._toastrService.success('Feedback deleted successfully.');
        this._router.navigate(['/feedbacks']);
      },
      error: (error) => {
        console.error('Error deleting feedback:', error);
        this._toastrService.error('Failed to delete Feedback. Please try again later.');
      }
    });
  }


    goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this._router.navigate(['/feedbacks']);
    }
  }
}

