import { Component, input, output } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { NgClass, NgIf } from '@angular/common';
import { IReply, IReplyInit } from '../../../shared/models/replies.model';
import { CommentFormComponent } from "../comment-form/comment-form.component";

@Component({
  selector: 'app-comment',
  imports: [NgClass, NgIf, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  comment = input<IComment | IReply>();
  commentId = input(0);
  isLastComment = input<boolean>(false);
  replyContent = output<IReplyInit>();


  isSendingReply = false;
  showCommentForm = false;

  onShowCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }

  onReply(content: string) {
    const payload : IReplyInit = {
      commentId: this.commentId(),
      replyingTo: this.comment()!.user.username,
      content
    }
    this.replyContent.emit(payload);
    this.showCommentForm = false;
  }


}
