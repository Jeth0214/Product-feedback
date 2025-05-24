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
  // Default selected category and transform it to title case
  selectedCategory = this.selectedCategoryTitleCase('bug');

  onSelectCategory(category: string) {
    console.log('Selected category:', category);
  }

  // transform selected Category  to title case
 private selectedCategoryTitleCase(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }


}
