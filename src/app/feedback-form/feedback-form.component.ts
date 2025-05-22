import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {

  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';

  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

}
