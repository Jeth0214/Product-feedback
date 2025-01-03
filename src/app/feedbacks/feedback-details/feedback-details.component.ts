import { Component,  computed,  effect,  inject, signal } from '@angular/core';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { FeedbackCommentFormComponent } from './feedback-comment-form/feedback-comment-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { IComment } from '../../shared/models/comment.model';
import { FeedBackService } from '../../shared/services/feedbacks.service';

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

  // properties
  upVoteIcon = faChevronUp;

  // signals
  feedBack = signal<IFeedBack | undefined>(undefined);
  comments = computed(() => this.feedBack()?.comments ?? []);
  title = computed(() => { return `${this.comments().length} Comment${this.comments().length > 1 ? 's' : ''}` });



   

  constructor() {
    this.feedBack.set(this._activatedRoute.snapshot.data["feedBackDetails"]);
    // effect( () => console.log(this.comments()) );
    // effect(() => console.log('user', this.currentUser));
    // this.addComment();
    this.addFeedback();
  }

  async addComment() {
    const currentUser = this._authService!.user();
    if (!currentUser) {
        console.error('Current user is null');
        return;
    }

    let comment: IComment = {
      id: this.comments.length + 1,
      content: 'Hello',
      user: currentUser,
   }

    this.feedBack.update((current) => {
      if (current) {
        current.comments = current.comments ?? [];
        current.comments.push(comment);
      }
      return current;
    });
   const updateFeedback = this.feedBack();
    console.log('Feedback updated:', updateFeedback);
      if (updateFeedback) {
        try {
          const feedback = await this._feedbackService.updateFeedback(updateFeedback.id, updateFeedback);
          console.log('Feedback updated:', feedback);
            this.feedBack.set(feedback);
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    } else {
        console.error('Feedback is undefined');
    }
   
  }

 addFeedback() {
  //   let data = {
  //           id: 13,
  //     title: "test",
  //     category: "enhancement",
  //     upvotes: 112,
  //     status: "suggestion",
  //     description: "Easier to search for solutions based on a specific stack.",
  //   }

  //  this._feedbackService.addFeedBackObservable(data).subscribe({
  //     next: (feedback) => {
  //       console.log('Feedback added:', feedback);
  //       this.feedBack.set(feedback);
  //     },
  //     error: (error) => {
  //       console.error('Error adding feedback:', error);
  //     }
   //   });
   
    // try {
    //       const feedback = await this._feedbackService.addPOst();
    //       console.log('Feedback updated:', feedback);
    //         // this.feedBack.set(feedback);
    //     } catch (error) {
    //         console.error('Error updating feedback:', error);
   //     }
   
      this._feedbackService.addPostObservable().subscribe({
      next: (feedback) => {
        console.log('Feedback added:', feedback);
        this.feedBack.set(feedback);
      },
      error: (error) => {
        console.error('Error adding feedback:', error);
      }
     });
  }




}

