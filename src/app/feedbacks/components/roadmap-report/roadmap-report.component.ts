import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { IFeedBack } from '../../../shared/models/feedbacks.model';


@Component({
  selector: 'app-roadmap-report',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './roadmap-report.component.html',
  styleUrl: './roadmap-report.component.scss'
})
export class RoadmapReportComponent {

  title: string = "Roadmap";
  circleIcon = faCircle;

  feedbacks = input<IFeedBack[]>([]);
  plannedCount = computed(() => this.feedbacks().reduce((acc, feedback) => acc + (feedback.status === 'planned' ? 1 : 0), 0));
  inProgressCount = computed(() => this.feedbacks().reduce((acc, feedback) => acc + (feedback.status === 'in-progress' ? 1 : 0), 0));
  liveCount = computed(() => this.feedbacks().reduce((acc, feedback) => acc + (feedback.status === 'live' ? 1 : 0), 0));


}
