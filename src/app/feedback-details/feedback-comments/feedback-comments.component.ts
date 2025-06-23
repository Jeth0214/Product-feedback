import { Component, computed,  effect,  inject,  Input,  input } from '@angular/core';
import { IComment } from '../../shared/models/comment.model';
import { NgClass, NgIf } from '@angular/common';
import { FeedbackCommentFormComponent } from '../feedback-comment-form/feedback-comment-form.component';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { IReply } from '../../shared/models/replies.model';
import { IUser } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';


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
  // @Input() comments: IComment[] = [];


  // signals
  comments = input.required<Partial<IComment[]>>();
  feedBackId = input.required<number>();
  isLast = input<boolean>();
  feedBack = input<IFeedBack>();
    title = computed(() => { return `${this.comments().length} Comment${this.comments().length > 1 ? 's' : ''}` });
  // replyBorder = computed(() => this.comment().replyingTo ? ' border-l  md:ms-6 ps-6' : '');
  currentUser = this._authService.user();

  
  constructor() {
    // effect(() => console.log('comment', this.comment()));
    // effect(() => console.log('Feedback', this.feedBack()));
    // this.addComment();
   }

  onShowCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }

  // addComment() {
  //   const currentUser = this._authService.user() as IUser;
  //   let comment: IReply = {
  //     replyingTo: 'Test',
  //     content: 'commentdata',
  //     user: currentUser,
  //   }
    
  //   const feed = this.feedBack() as IFeedBack;
  //   // if (feed.comments) {
      
  //   //   const commentFromFeedback = feed.comments?.filter(comment =>  comment.id === this.comment().id);
  //   //   console.log('commentFromFeedback',commentFromFeedback)
  //   // }
  // // // Assuming feedBack is an object that can be directly mutated
  //   if (feed) {
  //    feed.comments = feed.comments ?? [];
  //     // feed.comments.push(comment);
  //   }
  // }

  async addComment(commentdata: string) {
  //   const currentUser = this._authService.user() as IUser;
  //   let comment: IComment = {
  //     id: this.comments.length + 1,
  //     content: commentdata,
  //     user: currentUser,
  //  }

  //   // since we don have a comment endpoint, we will update the feedback with the new or added comment 
  //   this.feedBack.update((current) => {
  //     if (current) {
  //       current.comments = current.comments ?? [];
  //       current.comments.push(comment);
  //     }
  //     return current;
  //   });
  //  const updatedFeedBack = this.feedBack() as IFeedBack;

  //  await this.updateFeedBack(updatedFeedBack); 
    
   
  }


  async updateFeedBack(feedBack: IFeedBack) {
    // this.isLoading = true;
    // try {
    //   const updatedFeedbackFromService = await this._feedbackService.updateFeedback(feedBack);
    //   this.feedBack.set(updatedFeedbackFromService);
    // } catch (error) {
    //   console.error('Error updating feedback:', error);
    // } finally { 
    //   this.isLoading = false;
    // }
  }
  
  
  
}
