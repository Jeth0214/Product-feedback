import { Component, computed, effect, inject, signal } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { NgClass } from '@angular/common';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { RoadmapListCardComponent } from './roadmap-list-card/roadmap-list-card.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';



@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [ToolbarComponent , NgClass, EmptyComponent , RoadmapListCardComponent , LoadingComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {

  // properties
  title: string = 'Roadmap';
  selectedRoadMap = 'planned';

  // injections
  _feedBackService = inject(FeedBackService);

  // signals
  feedBacks = signal<IFeedBack[]>([]);
  planned = computed(() => { return this.feedBacks().filter(feedBack =>  feedBack.status === 'planned' ) });
  inProgress = computed(() => { return this.feedBacks().filter(feedBack => feedBack.status === 'in-progress') });
  live = computed(() => {return this.feedBacks().filter(feedBack => feedBack.status === 'live') });




  constructor() {
    this.loadFeedBacks();
  }

  async loadFeedBacks() {
    try {
      const feedBacks = await this._feedBackService.getAllFeedBacks();
      this.feedBacks.set(feedBacks)
    }
    catch (err) {
      alert('Error loading feed');
      console.error('Error loading feed', err);
     }
  }

  onSelectRoadMap(type: string) {
    console.log('onSelectRoadMap', type);
    this.selectedRoadMap = type;
  }


}
