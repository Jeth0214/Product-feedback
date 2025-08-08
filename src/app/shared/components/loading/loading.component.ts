import { Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-loading',
    imports: [NgClass],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  isLoading = input<boolean>(false);
  fullScreen = input<boolean>(false);

}
