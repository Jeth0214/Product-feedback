import { Component, computed, inject, input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { countComment } from '../../../shared/functions/countComment';
import { IUser } from '../../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FeedBackService } from '../../../shared/services/feedbacks.service';
import { finalize } from 'rxjs';
import { IFeedBack } from '../../../shared/models/feedbacks.model';
import { IReplyInit } from '../../../shared/models/replies.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EmptyCardComponent } from "../../../shared/components/empty-card/empty-card.component";

@Component({
  selector: 'app-comment-list',
  imports: [CommentComponent, EmptyCardComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  private toastrService = inject(ToastrService);
  private feedBackService = inject(FeedBackService);

  currentUser = input.required<IUser>();
  feedBack = input.required<IFeedBack>();
  comments = computed(() => { return this.feedBack().comments });
  commentsCount = computed(() => { return countComment(this.feedBack().comments) });

  isSendingReply = false;

  onAddingReply(replyData: IReplyInit) {
    const feedBack = this.feedBack();
    if (!feedBack) return;

    const user = this.currentUser();
    if (!user) {
      this.toastrService.error('You must be logged in to reply.');
      return;
    }   
    this.isSendingReply = true;
    this.feedBackService.addReplyToComment(feedBack, replyData, user).pipe(
      finalize(() => {
        this.isSendingReply = false;
      })
    ).subscribe({ 
      next: () => {
        this.toastrService.success('Reply successfully added!');
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to add reply. Please try again later.', `Error ${error.status}`);
      }
    });

  }


}
