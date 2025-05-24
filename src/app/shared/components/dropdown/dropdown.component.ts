import { NgClass } from '@angular/common';
import { Component, computed, effect, ElementRef, HostListener, input, output, signal, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    imports: [NgClass],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;

  dropDownOptions = input.required<string[]>();
  dropDownType = input.required<string>();
  dropDownArrowColor = input.required<string>();
  processOption = output<string | undefined>();
  defaultOption = input<string | undefined>(undefined);

  selectedOption = signal<string | undefined>(undefined);
  isDropdownOpen = signal(false);


  selectEffect = effect(() => this.processOption.emit(this.selectedOption()));

  // change button style class  based on the dropdown type value
  buttonClass = computed(() => {
   return this.dropDownType() == 'inline-block' ? 'text-white  hover:text-gray-100'
      : 'text-dark-800 bg-light-800 rounded-lg w-full px-6 py-3 hover:border hover:border-blue'
  });

  // change button border class  based on the dropdown type value and isDropdownOpen state
  borderClass = computed(() => { 
    return this.dropDownType() == 'block' && this.isDropdownOpen() ? 'border-blue border ' : 'border-0';
  })

  // change list width   based on the dropdown type value
  listClass = computed(() => { return this.dropDownType() == 'inline-block' ? 'w-64' : 'w-full' });

  // change  icon  based on the dropdown arrow color value and isDropdownOpen state
  arrowIcon = computed(() => { 
    return this.isDropdownOpen() ?
      `/assets/shared/icon-${this.dropDownArrowColor()}-arrow-down.svg`
      : `/assets/shared/icon-${this.dropDownArrowColor()}-arrow-up.svg`;
   })



  ngOnInit() {
    // Always set the first option as default
    const options = this.dropDownOptions();
    const defaultOption = this.defaultOption();
    //  Fallback if options is empty or undefined
    if (defaultOption) {
      this.selectedOption.set(defaultOption);
    } else {
      this.selectedOption.set(options[0]);
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
