import { Component, computed,  effect,  inject,  input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { NgClass, NgIf } from '@angular/common';
import { FeedbackCommentFormComponent } from '../feedback-comment-form/feedback-comment-form.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-feedback-comments',
  imports: [NgClass, FeedbackCommentFormComponent, NgIf],
  templateUrl: './feedback-comments.component.html',
  styleUrl: './feedback-comments.component.scss'
})
export class FeedbackCommentsComponent {
  
  // injections
  _authService = inject(AuthService);


  // properties
  showCommentForm = false;

  // signals
  comment = input.required<Partial<IComment>>();
  isLast = input<boolean>();
  replyBorder = computed(() => this.comment().replyingTo ? ' border-l  md:ms-6 ps-6' : '');
  currentUser = this._authService.user();

  
  constructor() {
    // effect(() => console.log('comment', this.comment()));
   }

  onShowCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }


  
  
  
  
}
