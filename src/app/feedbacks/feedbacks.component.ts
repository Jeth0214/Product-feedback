import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { CategoryComponent } from './components/category/category.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FeedbackBoardComponent } from "./components/feedback-board/feedback-board.component";
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { RoadmapReportComponent } from './components/roadmap-report/roadmap-report.component';
import { LoadingService } from '../shared/services/loading.service';
import { IFeedBack } from '../shared/models/feedbacks.model';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [
    ToolbarComponent,
    CategoryComponent,
    FeedbackBoardComponent,
    ToolbarComponent, 
    FeedbackListComponent,
    RoadmapReportComponent
],
    templateUrl: './feedbacks.component.html',
    styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent  {
 
  // injections
  _feedBackService = inject(FeedBackService);
  _loadingService = inject(LoadingService);

  // properties
  feedBacks = this._feedBackService.filteredFeedBacks;
  count = computed(() => this._feedBackService.filteredFeedBacks().length);
  category = this._feedBackService.categoryTerm;
  
  
  constructor() 
  {
    this._feedBackService.getAllFeedBacks();
  }

  // property to show hide roadmap and filter cards
  isOpen = false;


  // toggle the roadmap and filter cards
  toggleRoadmapAndFilter(event: any) { 
    this.isOpen = event;
  }

  onChooseCategory(category: string) {
    this._feedBackService.setCategoryTerm(category);
  }
  
  onSortByValue(sortValue: string) {
    this._feedBackService.setSortValue(sortValue);
  }

  onUpVoteFeedBack(feedBack: IFeedBack) {
    this._feedBackService.upVoteFeedBack(feedBack)
  }


}
