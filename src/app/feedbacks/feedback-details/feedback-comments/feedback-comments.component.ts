import { Component, computed,  input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { IReply } from '../../../shared/models/replies.model';
import { NgClass } from '@angular/common';
import { FeedbackCommentFormComponent } from '../feedback-comment-form/feedback-comment-form.component';

@Component({
  selector: 'app-feedback-comments',
  imports: [NgClass, FeedbackCommentFormComponent],
  templateUrl: './feedback-comments.component.html',
  styleUrl: './feedback-comments.component.scss'
})
export class FeedbackCommentsComponent {


  comment = input.required<IComment | IReply>();
  commentStatus = input.required<'firstComment' | 'reply'>();
  isLast = input<boolean>();
  replyBorder = computed(() => this.commentStatus() == 'reply' ? ' border-l  md:ms-6 ps-6' : '');

  showCommentForm =  false;


  onReply() {
    this.showCommentForm = !this.showCommentForm;
   }

}
