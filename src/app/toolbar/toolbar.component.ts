import { Component } from '@angular/core';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [DropdownComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  title: string = 'Suggestions';
  suggestionsCount: number = 6;

  faPlus = faPlus;
}
