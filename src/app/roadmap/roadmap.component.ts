import { Component, computed, HostListener, inject,  OnInit } from '@angular/core';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { NgClass } from '@angular/common';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { RoadmapListCardComponent } from './components/roadmap-list-card/roadmap-list-card.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { RoadMapStatus } from '../shared/models/roadmap-status.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';
import { LoadingService } from '../shared/services/loading.service';



@Component({
    selector: 'app-roadmap',
  imports: [
    NgClass,
    EmptyComponent,
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
  _feedBackService = inject(FeedBackService);
  _loadingService = inject(LoadingService)

  // signals
  feedBacks = this._feedBackService.filteredFeedBacks;
  planned = computed(() => { return this.feedBacks().filter(feedBack =>  feedBack.status === 'planned' ) });
  inProgress = computed(() => { return this.feedBacks().filter(feedBack => feedBack.status === 'in-progress') });
  live = computed(() => {return this.feedBacks().filter(feedBack => feedBack.status === 'live') });

  //isLargeScreen  detect if the screen is large, and it is updated on window resize.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  
  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 768;
    this._feedBackService.getAllFeedBacks();
  }


  onSelectRoadMapStatus(type: string) {
    this.selectedRoadMapStatus = type as RoadMapStatus;
  }


}
