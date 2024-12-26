import { Component, input } from '@angular/core';
import { IComment } from '../../../shared/models/comment.model';

@Component({
  selector: 'app-feedback-comments',
  imports: [],
  templateUrl: './feedback-comments.component.html',
  styleUrl: './feedback-comments.component.scss'
})
export class FeedbackCommentsComponent {

  comments = input<IComment[]>([]);

}
