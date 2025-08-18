import { Component, computed, effect, HostListener, inject,  OnInit } from '@angular/core';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { NgClass } from '@angular/common';
import { EmptyCardComponent } from '../shared/components/empty-card/empty-card.component';
import { RoadmapListCardComponent } from './components/roadmap-list-card/roadmap-list-card.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { RoadMapStatus } from '../shared/models/roadmap-status.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  imports: [
    NgClass,
    EmptyCardComponent,
    RoadmapListCardComponent,
    LoadingComponent,
    FontAwesomeModule,
    RouterLink
  ],
    templateUrl: './roadmap.component.html',
    styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements OnInit {

  // properties
  title: string = 'Roadmap';
  selectedRoadMapStatus : RoadMapStatus = 'in-progress';
  isLargeScreen: boolean = window.innerWidth >= 768;
  faPlus = faPlus;

  // injections
  feedBackService = inject(FeedBackService);
  router = inject(Router)

  // signals
  feedBacks = this.feedBackService.filteredFeedBacks;
  isFetchingFeedBacks = this.feedBackService.isFetchingFeedBacks;
  category = this.feedBackService.categoryTerm;
  planned = computed(() => { return this.feedBacks().filter(feedBack =>  feedBack.status === 'planned' ) });
  inProgress = computed(() => { return this.feedBacks().filter(feedBack => feedBack.status === 'in-progress') });
  live = computed(() => { return this.feedBacks().filter(feedBack => feedBack.status === 'live') });

   emptyCardTitle = computed(() => this.category() === 'All' ? 'No feedbacks yet' : `No feedbacks in ${this.category()}` );
  
  

  //isLargeScreen  detect if the screen is large, and it is updated on window resize.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  
  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 768;
    this.feedBackService.getAllFeedBacks();
  }


  onSelectRoadMapStatus(type: string) {
    this.selectedRoadMapStatus = type as RoadMapStatus;
  }

  gotToFeedbackForm() {
    this.router.navigate(['/feedback-form']);
  }

}
