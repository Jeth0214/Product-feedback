import { Component, computed, input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { IComment } from '../../../shared/models/comment.model';
import { countComment } from '../../../shared/functions/countComment';
import { IUser } from '../../../shared/models/user.model';

@Component({
  selector: 'app-comment-list',
  imports: [CommentComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  comments = input<IComment[] | undefined>([]);
  currentUser = input<IUser | null>({} as IUser);
  commentsCount = computed(() => countComment(this.comments()));

}
