import { Component,  computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../shared/services/auth.service';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { FeedbackCardComponent } from '../shared/components/feedback-card/feedback-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { finalize } from 'rxjs';
import { CommentListComponent } from './components/comment-list/comment-list.component';

import { HttpErrorResponse } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { DetailsToolbarComponent } from './components/details-toolbar/details-toolbar.component';
import { EmptyCardComponent } from '../shared/components/empty-card/empty-card.component';

@Component({
    selector: 'app-feedback-details',
  imports: [
    FontAwesomeModule,
    LoadingComponent,
    DetailsToolbarComponent,
    FeedbackCardComponent,
    CommentFormComponent,
    CommentListComponent,
    EmptyCardComponent
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
  


  id: number = 0;
  feedBack = this.feedbackService.selectedFeedBack;
  isFetchingSelectedFeedBack = this.feedbackService.isFetchingSelectedFeedBack;
  isAddingComment = signal(false);
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
      else {
        this.toastrService.error('Feedback ID is missing in the route parameters.');
        this.router.navigate(['/feedbacks']);
      }
     })
  }
  
  onComment(comment: string) {
    const user = this.currentUser();
    if (!user) {
      this.toastrService.error('You must be logged in to comment.');
      return ;
    }
    this.isAddingComment.set(true);
    this.feedbackService.addComment(this.feedBack(), user, comment)
    .pipe(finalize(() => this.isAddingComment.set(false)))
    .subscribe({
      next: () => {
        this.toastrService.success('Comment added successfully.');
      },
      error: () => {
        this.toastrService.error('Failed to add comment. Please try again later.');
      }
    });
  }
}

