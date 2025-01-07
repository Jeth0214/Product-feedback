import { Component, inject, Input } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-loading',
    imports: [NgClass],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  _loadingService = inject(LoadingService);
  isLoading = this._loadingService.isLoading;

  @Input() full : boolean = false;
}
