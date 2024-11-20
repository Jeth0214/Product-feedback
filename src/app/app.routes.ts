import { Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions/suggestions.component';

export const routes: Routes = [
  { path: '', redirectTo: '/suggestions', pathMatch: 'full'},
  { path: 'suggestions', loadComponent: () => import('./suggestions/suggestions.component').then( m => m.SuggestionsComponent) }
];
