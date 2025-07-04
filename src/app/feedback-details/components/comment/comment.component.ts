import { Component, input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';
import { NgClass, NgIf } from '@angular/common';
import { IUser } from '../../../shared/models/user.model';
import { IReply } from '../../../shared/models/replies.model';

@Component({
  selector: 'app-comment',
  imports: [NgClass, NgIf],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  comment = input<IComment | IReply>();
  isLastComment = input<boolean>(false);
  currentUser = input<IUser>();

  showCommentForm = false;

  onShowCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }
}
