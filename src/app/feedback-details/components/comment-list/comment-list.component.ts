import { Component, computed, inject, input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { IComment } from '../../../shared/models/comment.model';
import { countComment } from '../../../shared/functions/countComment';
import { IUser } from '../../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FeedBackService } from '../../../shared/services/feedbacks.service';
import { finalize } from 'rxjs';
import { IFeedBack } from '../../../shared/models/feedbacks.model';

@Component({
  selector: 'app-comment-list',
  imports: [CommentComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  private _toastrService = inject(ToastrService);
  private _feedBackService = inject(FeedBackService);

  comments = input<IComment[] | undefined>([]);
  currentUser = input<IUser | null>({} as IUser);
  commentsCount = input<number>(0);

  isSendingReply = false;


  onCommentAdded(comment: string) {
  
  }

}
