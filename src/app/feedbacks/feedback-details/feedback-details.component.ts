import { Component,  computed,  effect,  inject, signal } from '@angular/core';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { FeedbackCommentFormComponent } from './feedback-comment-form/feedback-comment-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { IComment } from '../../shared/models/comment.model';
import { FeedBackService } from '../../shared/services/feedbacks.service';
import { IUser } from '../../shared/models/user.model';
import { LoadingService } from '../../shared/services/loading.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
    selector: 'app-feedback-details',
    imports: [RouterLink, FontAwesomeModule, FeedbackCommentsComponent, FeedbackCommentFormComponent],
    templateUrl: './feedback-details.component.html',
    styleUrl: './feedback-details.component.scss'
})
export class FeedbackDetailsComponent {

   // Injections
  _activatedRoute = inject(ActivatedRoute);
  _authService = inject(AuthService);
  _feedbackService = inject(FeedBackService);
  _router = inject(Router);
  _loadingService = inject(LoadingService);

  // properties
  upVoteIcon = faChevronUp;
  isLoading: boolean = false;

  // signals
  feedBack = signal<IFeedBack | undefined>(undefined);
  comments = computed(() => this.feedBack()?.comments ?? []);
  title = computed(() => { return `${this.comments().length} Comment${this.comments().length > 1 ? 's' : ''}` });



   

  constructor() {
    this.feedBack.set(this._activatedRoute.snapshot.data["feedBackDetails"]);

  }

  async addComment(commentdata: string) {
    const currentUser = this._authService.user() as IUser;
    let comment: IComment = {
      id: this.comments.length + 1,
      content: commentdata,
      user: currentUser,
   }

    // since we don have a comment endpoint, we will update the feedback with the new or added comment 
    this.feedBack.update((current) => {
      if (current) {
        current.comments = current.comments ?? [];
        current.comments.push(comment);
      }
      return current;
    });
   const updatedFeedBack = this.feedBack() as IFeedBack;

   await this.updateFeedBack(updatedFeedBack); 
    
   
  }





  async updateFeedBack(feedBack: IFeedBack) {
    this._loadingService.loadingOn();
    this.isLoading = true;
    try {
      const updatedFeedbackFromService = await this._feedbackService.updateFeedback(feedBack);
      this.feedBack.set(updatedFeedbackFromService);
    } catch (error) {
      console.error('Error updating feedback:', error);
    } finally { 
      this._loadingService.loadingOff();
      this.isLoading = false;
    }
  }
   
  




}

