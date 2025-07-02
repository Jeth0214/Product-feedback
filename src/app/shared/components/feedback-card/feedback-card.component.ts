import { Component, computed, input } from '@angular/core';
import { IFeedBack } from '../../models/feedbacks.model';
import { UpvoteButtonComponent } from '../upvote-button/upvote-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-card',
  imports: [UpvoteButtonComponent, RouterLink],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss'
})
export class FeedbackCardComponent {

  feedBack = input.required<IFeedBack>();

  commentsCount = computed(() => {
    let count = 0;
    let comments = this.feedBack().comments;
    if(comments) {
      comments.forEach(comment => {
        count++;
        if (comment.replies) {
          count += comment.replies.length;
        }
      });

    }
    return count;
  })
  
}
