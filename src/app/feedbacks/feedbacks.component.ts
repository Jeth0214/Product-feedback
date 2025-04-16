import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { EmptyComponent } from '../shared/components/empty/empty.component';
import { ToastrService } from 'ngx-toastr';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LoadingService } from '../shared/services/loading.service';
import { RoadmapMainCardComponent } from '../roadmap/roadmap-main-card/roadmap-main-card.component';
import { CategoryComponent } from './category/category.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
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
export class FeedbacksComponent {
 
  // properties
  plusIcon = faPlus;
  upVoteIcon = faChevronUp;
  commentIcon = faComment;
  feedBacks = signal<IFeedBack[]>([]);


  // Injections
  _feedBackService = inject(FeedBackService);
  _toastrService = inject(ToastrService);
  _loadingService = inject(LoadingService);
  
  // property to show hide roadmap and filter cards
  isOpen = false;


  constructor() {
   this.getFeedBacks();
  }

  async getFeedBacks() {
    this._loadingService.loadingOn();
    try {
      const feedBacks = await this._feedBackService.getAllFeedBacks();
      this.feedBacks.set(feedBacks);
    } catch (error) {
      const errorMessage = ( error as HttpErrorResponse ).message || 'Unknown error';
      this._toastrService.error(errorMessage, 'Error');
    } finally {
      this._loadingService.loadingOff();
    }
  }


  // method to toggle the roadmap and filter cards
  toggleRoadmapAndFilter(event: any) { 
    console.log(event);
    this.isOpen = event;
  }

}
