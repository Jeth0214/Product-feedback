import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface SortOption  { name: string; value: { prop: string; order: string } };

@Component({
  selector: 'app-toolbar',
  imports: [DropdownComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

   @Input() title: string = '';
    @Input() isSuggestionPage: boolean = true;
    suggestionsCount: number = 6;
  
    faPlus = faPlus;

  sortOptions: SortOption[] = [
    {
      name: 'Most Upvotes',
      value: {
        prop: 'upvotes',
        order: 'asc'
      }
    },
    {
      name: 'Least Upvotes',
      value: {
        prop: 'upvotes',
        order: 'desc'
      }
    },
    {
      name: 'Most Comments',
      value: {
        prop: 'comments',
        order: 'asc'
      }
    },
    {
      name: 'Least Comments',
      value: {
        prop: 'comments',
        order: 'desc'
      }
    }
  ];

  sortByName = this.sortOptions.map((option) => option.name);
  
  
  onSortByChange(selectedOption: string) {
    console.log('Selected option:', selectedOption);
    const selectedSortOption = this.sortOptions.find(option => option.name === selectedOption);
    if (selectedSortOption) {
      console.log('Selected sort option:', selectedSortOption);
     }
   }
}


