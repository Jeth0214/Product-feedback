import { Component, computed, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IFeedBack } from '../../../shared/models/feedbacks.model';

@Component({
  selector: 'app-details-toolbar',
  imports: [],
  templateUrl: './details-toolbar.component.html',
  styleUrl: './details-toolbar.component.scss'
})
export class DetailsToolbarComponent {
  private location = inject(Location);
  private router = inject(Router);

  feedBack = input.required<IFeedBack>();

  onEdit() {
    this.router.navigate(['/feedback-form', this.feedBack().id]);
  }

  goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this.router.navigate(['/feedbacks']);
    }
  }

}
