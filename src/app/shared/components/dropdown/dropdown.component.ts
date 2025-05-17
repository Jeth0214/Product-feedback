import { NgClass } from '@angular/common';
import { Component, effect, ElementRef, HostListener, input, Input, output, signal, ViewChild } from '@angular/core';
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
  selectedOption = signal<string | undefined>(undefined);
  isDropdownOpen = signal(false);
  processOption = output<string | undefined>();
  selectEffect = effect(() => this.processOption.emit(this.selectedOption()));

  ngOnInit() {
    // Always set the first option as default
    const options = this.dropDownOptions();
    //  Fallback if options is empty or undefined
    if (options && options.length > 0) {
      this.selectedOption.set(options[0]);
    } else {
      this.selectedOption.set('');
    }
  }

  toggleDropdown() {
    this.isDropdownOpen.update(open => !open);
  }

  onSelectOption(option: any) {
    this.selectedOption.set(option);
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
