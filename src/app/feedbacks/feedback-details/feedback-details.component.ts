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
  
  currentUser = this._authService.user();


   

  constructor() {
    this.feedBack.set(this._activatedRoute.snapshot.data["feedBackDetails"]);
    effect( () => console.log(this.comments()) );
    effect(() => console.log('user', this.currentUser));
    this.addComment();
  }

 async addComment() {
    let comment: IComment = {
      id: this.comments.length + 1,
      content: 'Hello',
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround"
      }
   }
   

    this.feedBack.update((current) => {
      if (current) {
        current.comments = current.comments ?? [];
        current.comments.push(comment);
      }
      return current;
    });

    const updateFeedback = this.feedBack();

  //  ! TODO: this
    // this._feedbackService.updateFeedback(this.feedBack()!.id, updateFeedback());
  }




}

