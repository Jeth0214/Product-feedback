import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';


@Component({
  selector: 'app-toolbar',
  imports: [DropdownComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  router = inject(Router);

  // properties
  faPlus = faPlus;
  sortOptions = [ 'Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

  // signals
  suggestionsCount = input(1);
  isLoading = input<boolean>(false);
  emitSortValue = output<string>();
  sortValue = signal(this.sortOptions[0]);
  title = computed(() => this.suggestionsCount() > 1 ? 'Suggestions' : 'Suggestion');
  showSortDropdown = computed(() => !this.isLoading() && this.suggestionsCount() > 1);

  sortEffect = effect(() => this.emitSortValue.emit(this.sortValue()));


  sortByName = this.sortOptions.map((option) => option);
  
  
  onSortByChange(selectedOption: string) {
    this.sortValue.set(selectedOption);
  }
  
  goToFeedbackForm() { 
    this.router.navigate(['/feedback-form']);
  }
}


