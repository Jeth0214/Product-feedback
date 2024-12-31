import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-category',
    imports: [NgClass],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categories: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  chosenCategory: string = 'All';

  onChooseCategory(category: string = 'All') {
    this.chosenCategory = category;
    
    console.log(this.chosenCategory);
  }

}
