import { Component, Input, input } from '@angular/core';
import { IFeedBack } from '../../shared/models/feedbacks.model';
import { faChevronUp, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-roadmap-list-card',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './roadmap-list-card.component.html',
  styleUrl: './roadmap-list-card.component.scss'
})
export class RoadmapListCardComponent {


  // properties
  upVoteIcon = faChevronUp;
   circleIcon = faCircle;

  // signals
  feedBacks = input.required<IFeedBack[]>()

  // Normal Input
  @Input() title : string = '';
  @Input() description : string = '';
}
