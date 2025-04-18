import { Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { feedBackDetailsResolver } from './feedback-details/feedback-details.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/feedbacks', pathMatch: 'full' },
  {path: 'feedbacks', loadComponent: () => import('./feedbacks/feedbacks.component').then(m => m.FeedbacksComponent) },
  { path: 'feedbacks:id', resolve: { feedBackDetails: feedBackDetailsResolver } , loadComponent: () => import('./feedback-details/feedback-details.component').then(m => m.FeedbackDetailsComponent) },
  { path: 'roadmap', loadComponent: () => import('./roadmap/roadmap.component').then(m => m.RoadmapComponent ) },
  {path: '**', loadComponent: () => import('./page-404/page-404.component').then(m => m.Page404Component)}
];
