import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { CategoryComponent } from './components/category/category.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FeedbackBoardComponent } from "./components/feedback-board/feedback-board.component";
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { RoadmapReportComponent } from './components/roadmap-report/roadmap-report.component';

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
export class FeedbacksComponent implements OnInit {
 
  // injections
  feedBackService = inject(FeedBackService);

  feedBacks = this.feedBackService.filteredFeedBacks;
  isFeedbacksLoading = this.feedBackService.isFetchingFeedBacks;
  count = computed(() => this.feedBackService.filteredFeedBacks().length);
  category = this.feedBackService.categoryTerm;
  

  ngOnInit() {
    this.feedBackService.getAllFeedBacks();
   }

  // property to show hide roadmap and filter cards
  isOpen = false;


  // toggle the roadmap and filter cards
  toggleRoadmapAndFilter(event: any) { 
    this.isOpen = event;
  }

  onChooseCategory(category: string) {
    this.feedBackService.setCategoryTerm(category);
  }
  
  onSortByValue(sortValue: string) {
    this.feedBackService.setSortValue(sortValue);
  }


}
