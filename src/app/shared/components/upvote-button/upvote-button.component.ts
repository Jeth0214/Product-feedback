import { Component, computed, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../../services/feedbacks.service';
import { IFeedBack } from '../../models/feedbacks.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-upvote-button',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './upvote-button.component.html',
  styleUrl: './upvote-button.component.scss'
})
export class UpvoteButtonComponent {

  feedBackService = inject(FeedBackService);
  isUpVotingFeedback = this.feedBackService.isUpVotingFeedback;
  upVoteIcon = faChevronUp;
  feedBack = input.required<IFeedBack>();
  buttonStyle = input.required<'inline' | 'stack'>();
  buttonClass = computed(() => {
    return this.buttonStyle() == 'stack' ? 'md:flex-col  px-2 py-3' : 'py-2 px-4';
  })


  onUpVote() {
    const upVotedFeedback = { ...this.feedBack(), upvotes: (this.feedBack().upvotes || 0) + 1 };
    this.feedBackService.upVoteFeedBack(upVotedFeedback)
  }

}
