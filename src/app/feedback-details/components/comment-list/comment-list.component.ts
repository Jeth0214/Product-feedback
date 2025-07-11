import { Component, computed, inject, input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { countComment } from '../../../shared/functions/countComment';
import { IUser } from '../../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FeedBackService } from '../../../shared/services/feedbacks.service';
import { finalize } from 'rxjs';
import { IFeedBack } from '../../../shared/models/feedbacks.model';
import { IReplyInit } from '../../../shared/models/replies.model';

@Component({
  selector: 'app-comment-list',
  imports: [CommentComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  private _toastrService = inject(ToastrService);
  private _feedBackService = inject(FeedBackService);

  currentUser = input<IUser | null>({} as IUser);
  feedBack = input.required<IFeedBack | null>();
  comments = computed(() => { return this.feedBack()?.comments });
  commentsCount = computed(() => { return countComment(this.feedBack()?.comments) });

  isSendingReply = false;

  onAddingReply(commentData: IReplyInit) {
    const newComments = this.addReplyToComment(commentData);
    const feedBack = this.feedBack();
    if (!feedBack || !newComments) return;
    feedBack!.comments = [...newComments];
    this.onSendReply(feedBack);

  }

  addReplyToComment(replyData:any) {
    const comments = [...this.feedBack()!.comments!];
    const origComment = comments!.find(comment => comment.id === replyData.commentId);
    if (!origComment ) {
      console.warn('Comment Not Found')
      return
    }

    origComment.replies ??= []; 
    origComment.replies.push(   {
      content: replyData.content,
      replyingTo: replyData.replyingTo,
      user: this.currentUser()!
    });

    return comments

  }

  onSendReply(feedBack: IFeedBack) {
    this.isSendingReply = true;
    this._feedBackService.updateFeedBack(feedBack!).pipe(
      finalize(() => {
        this.isSendingReply = false;
      })
    ).subscribe({
      next: () => {
        this._toastrService.success('Reply successfully added!');
      },
      error: (error) => {
        this._toastrService.error('Failed to add comment. Please try again later.');
      }
    })
  }

}
