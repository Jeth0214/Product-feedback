import { Component, computed, effect, input } from '@angular/core';
import { IFeedBack } from '../../models/feedbacks.model';
import { UpvoteButtonComponent } from '../upvote-button/upvote-button.component';
import { RouterLink } from '@angular/router';
import { countComment } from '../../functions/countComment';

@Component({
  selector: 'app-feedback-card',
  imports: [UpvoteButtonComponent, RouterLink],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss'
})
export class FeedbackCardComponent {

  feedBack = input.required<IFeedBack>();

  commentsCount = computed(() => countComment(this.feedBack().comments));

  
}
