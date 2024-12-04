import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {


  isDropdownOpen = false;
  sortBy = 'Most UpVotes';
  sortOptions: string [] = [ 'Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectOption(option: string) {
    console.log(option);
    this.isDropdownOpen = false;
    this.sortBy = option;
   }
}
