import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    imports: [NgClass],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() dropDownOptions:any[] = [];
  @Input() sortBy = '';

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectOption(option: any) {
    
    console.log('select', option);
    this.isDropdownOpen = false;
    this.sortBy = option.name;
   }
}
