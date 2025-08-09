import { Component,  computed, effect, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../shared/services/auth.service';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { FeedbackCardComponent } from '../shared/components/feedback-card/feedback-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { finalize } from 'rxjs';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

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
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private feedbackService = inject(FeedBackService);
  private router = inject(Router);
  private toastrService = inject(ToastrService);
  private location = inject(Location);


  // properties
  id: number = 0;
  isLoading: boolean = false;
  isDeletingFeedBack: boolean = false;
  
  
  // signals
  feedBack = this.feedbackService.selectedFeedBack;
  isFetchingSelectedFeedBack = this.feedbackService.isFetchingSelectedFeedBack;
  isAddingComment = false;

  currentUser = this.authService.user;

  comments = computed(() => { return this.feedBack().comments ? this.feedBack().comments : [] });

  paramMap = toSignal(this.activatedRoute.paramMap, { initialValue: null });
  

  constructor() {
    effect(() => {
      const idParam = this.paramMap()?.get('id');
      if (idParam) {
        const feedBackID = +idParam;
        if (feedBackID) {
          this.feedbackService.getFeedBackById(feedBackID);
        }
      }
     })
  }
  
  onCommentAdded(comment: string) {
    const user = this.currentUser();
    if (!user) {
      this.toastrService.error('You must be logged in to comment.');
      return ;
    }
    
    this.isAddingComment = true;

    this.feedbackService.addComment(this.feedBack(), user, comment)
    .pipe(finalize(() => this.isAddingComment = false))
    .subscribe({
      next: () => {
        this.toastrService.success('Comment added successfully.');
      },
      error: () => {
        this.toastrService.error('Failed to add comment. Please try again later.');
      }
    });
  }


  onDeleteFeedBack() {
    let id = this.feedBack().id;
    this.isDeletingFeedBack = true;
  
    this.feedbackService.deleteFeedBack(id).pipe(
      finalize(() => {
        this.isDeletingFeedBack = false;
      })
    ).subscribe({
      next: () => {
        this.toastrService.success('Feedback deleted successfully.');
        this.router.navigate(['/feedbacks']);
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to delete Feedback. Please try again later.', `Status: ${error.status}`);
      }
    });
  }


    goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this.router.navigate(['/feedbacks']);
    }
  }
}

