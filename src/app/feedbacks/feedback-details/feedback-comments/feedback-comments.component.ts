import { Component, computed, input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { IReply } from '../../../shared/models/replies.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-feedback-comments',
  imports: [NgClass],
  templateUrl: './feedback-comments.component.html',
  styleUrl: './feedback-comments.component.scss'
})
export class FeedbackCommentsComponent {

  comment = input.required<IComment | IReply>();
  commentStatus = input.required<'firstComment' | 'reply'>();

  commentBorder = computed(() => this.commentStatus() == 'firstComment' ? 'border-b last:border-b-0 last:pb-0' : ' border-l  pb-6 md:ms-6 ps-6 last:pb-0');

}
