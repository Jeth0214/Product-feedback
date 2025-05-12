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
 
  // injections
  _feedBackService = inject(FeedBackService);

  // properties
  isLoading = this._feedBackService.isLoading;



  
  // property to show hide roadmap and filter cards
  isOpen = false;


 




  // method to toggle the roadmap and filter cards
  toggleRoadmapAndFilter(event: any) { 
    this.isOpen = event;
  }

}
