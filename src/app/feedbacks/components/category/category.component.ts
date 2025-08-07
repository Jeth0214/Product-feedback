import { NgClass } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  standalone: true,
    selector: 'app-category',
    imports: [NgClass],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss'
})
export class CategoryComponent {


  categories: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  chosenCategory = signal<string>('All');

  // input signal
  isLoading = input<boolean>(false);
  count = input<number>(0);

  emitCategory = output<string>();
  processCategory = effect(() => {
    this.emitCategory.emit(this.chosenCategory());
  });



  onChooseCategory(category: string) {
    this.chosenCategory.set(category);
  }

}
