import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-loading',
    imports: [],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  _loadingService = inject(LoadingService);
  isLoading = this._loadingService.isLoading;
}
