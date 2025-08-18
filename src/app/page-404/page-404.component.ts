import { Component } from '@angular/core';
import { EmptyCardComponent } from '../shared/components/empty-card/empty-card.component';

@Component({
    selector: 'app-page-404',
    standalone: true,
    imports: [EmptyCardComponent],
    templateUrl: './page-404.component.html',
    styleUrl: './page-404.component.scss'
})
export class Page404Component {
    title = 'Page Not Found';
}
