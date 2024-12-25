import { Component,  computed,  effect,  inject, signal } from '@angular/core';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback-details',
  standalone: true,
  imports: [RouterLink,  FontAwesomeModule],
  templateUrl: './feedback-details.component.html',
  styleUrl: './feedback-details.component.scss'
})
export class FeedbackDetailsComponent {

  // properties
  upVoteIcon = faChevronUp;

  // signals
  feedBack = signal<IFeedBack | null>(null);
  comments = computed( () =>  this.feedBack()?.comments ?? [] );


  // Injections
  _activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.feedBack.set(this._activatedRoute.snapshot.data["feedBackDetails"]);
    effect( () => console.log(this.comments()) );
  }



}

