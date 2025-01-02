import { Component, computed,  input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { NgClass, NgIf } from '@angular/common';
import { FeedbackCommentFormComponent } from '../feedback-comment-form/feedback-comment-form.component';

@Component({
  selector: 'app-feedback-comments',
  imports: [NgClass, FeedbackCommentFormComponent, NgIf],
  templateUrl: './feedback-comments.component.html',
  styleUrl: './feedback-comments.component.scss'
})
export class FeedbackCommentsComponent {


  comment = input.required<Partial<IComment>>();
  isLast = input<boolean>();
  replyBorder = computed(() => this.comment().replyingTo ? ' border-l  md:ms-6 ps-6' : '');

  showCommentForm =  false;


  onReply() {
    this.showCommentForm = !this.showCommentForm;
  }
  
  

}
