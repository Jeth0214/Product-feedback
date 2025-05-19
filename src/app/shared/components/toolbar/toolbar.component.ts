import { Component , Input} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
    selector: 'app-toolbar',
    imports: [ FontAwesomeModule, RouterLink],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input() title: string = '';
  @Input() isSuggestionPage: boolean = true;
  suggestionsCount: number = 6;

  faPlus = faPlus;

  dropDownOptions: string[] = [ 'Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];
}
