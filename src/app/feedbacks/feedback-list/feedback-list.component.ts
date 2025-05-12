import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FeedBackService } from '../../shared/services/feedbacks.service';
import { LoadingService } from '../../shared/services/loading.service';
import { faChevronUp, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IFeedBack } from '../../shared/models/feedbacks.model';

@Component({
  selector: 'app-feedback-list',
  imports: [
        EmptyComponent,
        FontAwesomeModule,
        LoadingComponent,
        RouterLink,
  ],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.scss'
})
export class FeedbackListComponent {

    // properties
  plusIcon = faPlus;
  upVoteIcon = faChevronUp;
  commentIcon = faComment;
  feedBacks = signal<IFeedBack[]>([]);

  // Injections
  _feedBackService = inject(FeedBackService);
  _toastrService = inject(ToastrService);
  _loadingService = inject(LoadingService);

   constructor() {

  }
  
}
