import { Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/suggestions', pathMatch: 'full'},
  { path: 'suggestions', loadComponent: () => import('./suggestions/suggestions.component').then(m => m.SuggestionsComponent) },
  { path: 'roadmap', loadComponent: () => import('./roadmap/roadmap.component').then(m => m.RoadmapComponent ) },
  {path: '**', loadComponent: () => import('./page-404/page-404.component').then(m => m.Page404Component)}
];
