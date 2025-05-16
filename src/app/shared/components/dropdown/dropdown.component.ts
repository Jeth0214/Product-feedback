import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, input, Input, signal, ViewChild } from '@angular/core';
import { SortOption } from '../../../feedbacks/toolbar/toolbar.component';

@Component({
    selector: 'app-dropdown',
    imports: [NgClass],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;

  dropDownOptions = input.required<string[]>();
  sortBy = signal<string | undefined>(undefined);
  isDropdownOpen = signal(false);

  ngOnInit() {
    const options = this.dropDownOptions();
    //  Fallback if options is empty or undefined
    if (options && options.length > 0) {
      this.sortBy.set(options[0]);
    } else {
      this.sortBy.set('');
    }
  }

  toggleDropdown() {
    this.isDropdownOpen.update(open => !open);
  }

  onSelectOption(option: any) {
    
    console.log('select', option);
    this.sortBy.set(option);
    this.isDropdownOpen.set(false);
  }
  
  // Close on Escape key
  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent) { 
    this.isDropdownOpen.set(false);
  }

  // Close on outside click
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.dropdownContainer.nativeElement && !this.dropdownContainer.nativeElement.contains(target)) {
      this.isDropdownOpen.set(false);
    }
  }

}
