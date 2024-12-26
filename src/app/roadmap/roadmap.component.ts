import { Component, computed, effect, HostListener, inject, signal, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { NgClass } from '@angular/common';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { RoadmapListCardComponent } from './roadmap-list-card/roadmap-list-card.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { RoadMapStatus } from '../shared/models/roadmap-status.model';
import { LoadingService } from '../shared/services/loading.service';



@Component({
    selector: 'app-roadmap',
    imports: [ToolbarComponent, NgClass, EmptyComponent, RoadmapListCardComponent, LoadingComponent],
    templateUrl: './roadmap.component.html',
    styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements OnInit {

  // properties
  title: string = 'Roadmap';
  selectedRoadMapStatus : RoadMapStatus = 'in-progress';
  isLargeScreen: boolean = window.innerWidth >= 768;

  // injections
  _feedBackService = inject(FeedBackService);
  _loadingService = inject(LoadingService);

  // signals
  feedBacks = signal<IFeedBack[]>([]);
  planned = computed(() => { return this.feedBacks().filter(feedBack =>  feedBack.status === 'planned' ) });
  inProgress = computed(() => { return this.feedBacks().filter(feedBack => feedBack.status === 'in-progress') });
  live = computed(() => {return this.feedBacks().filter(feedBack => feedBack.status === 'live') });

  //isLargeScreen  detect if the screen is large, and it is updated on window resize.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  constructor() {
    this.loadFeedBacks();
  }

  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 768;
  }

  async loadFeedBacks() {
    this._loadingService.loadingOn();
    try {
      const feedBacks = await this._feedBackService.getAllFeedBacks();
      this.feedBacks.set(feedBacks)
    }
    catch (err) {
      console.error('Error loading feed', err);
    } finally {
      this._loadingService.loadingOff();
     }
  }

  onSelectRoadMapStatus(type: string) {
    this.selectedRoadMapStatus = type as RoadMapStatus;
  }


}
