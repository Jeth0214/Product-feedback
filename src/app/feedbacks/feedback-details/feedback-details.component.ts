import { Component,  computed,  effect,  inject, signal } from '@angular/core';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { FeedbackCommentFormComponent } from './feedback-comment-form/feedback-comment-form.component';
import { AuthService } from '../../shared/services/auth.service';

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

  // properties
  upVoteIcon = faChevronUp;

  // signals
  feedBack = signal<IFeedBack | null>(null);
  comments = computed(() => this.feedBack()?.comments ?? []);
  title = computed(() => { return `${this.comments().length} Comment${this.comments().length > 1 ? 's' : ''}` });
  
  currentUser = this._authService.user();


   

  constructor() {
    this.feedBack.set(this._activatedRoute.snapshot.data["feedBackDetails"]);
    effect( () => console.log(this.comments()) );
    effect(() => console.log('user', this.currentUser ) );
  }



}

