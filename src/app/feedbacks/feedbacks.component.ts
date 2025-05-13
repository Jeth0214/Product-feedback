import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { RoadmapMainCardComponent } from '../roadmap/roadmap-main-card/roadmap-main-card.component';
import { CategoryComponent } from './category/category.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { FeedbackBoardComponent } from "./feedback-board/feedback-board.component";
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [
    ToolbarComponent,
    RoadmapMainCardComponent,
    CategoryComponent,
    FeedbackBoardComponent,
    ToolbarComponent, 
    FeedbackListComponent
],
    templateUrl: './feedbacks.component.html',
    styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent  {
  // icons
 
  // injections
  _feedBackService = inject(FeedBackService);

  // properties
  feedBacks = this._feedBackService.feedBacks;
  
  
  constructor() 
  {
    this._feedBackService.getAllFeedBacks();
  }

 


  // property to show hide roadmap and filter cards
  isOpen = false;


 


  // method to toggle the roadmap and filter cards
  toggleRoadmapAndFilter(event: any) { 
    this.isOpen = event;
  }

}
