import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {

  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';

}
