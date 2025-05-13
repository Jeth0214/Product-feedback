import { Component, Input } from '@angular/core';
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

   @Input() title: string = '';
    @Input() isSuggestionPage: boolean = true;
    suggestionsCount: number = 6;
  
    faPlus = faPlus;

  dropDownOptions = [
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

}
