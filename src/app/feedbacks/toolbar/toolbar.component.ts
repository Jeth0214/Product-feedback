import { Component, computed, effect, input, Input, output, signal } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-toolbar',
  imports: [DropdownComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  // properties
  faPlus = faPlus;
  sortOptions = [ 'Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

  // signals
  suggestionsCount = input(1);
  emitSortValue = output<string>();
  sortValue = signal(this.sortOptions[0]);
  title = computed(() => this.suggestionsCount() > 1 ? 'Suggestions' : 'Suggestion');
  sortEffect = effect(() => this.emitSortValue.emit(this.sortValue()));


  sortByName = this.sortOptions.map((option) => option);
  
  
  onSortByChange(selectedOption: string) {
    this.sortValue.set(selectedOption);
   }
}


