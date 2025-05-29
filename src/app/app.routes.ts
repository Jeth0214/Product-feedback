import { Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
// import { feedBackDetailsResolver } from './feedback-details/feedback-details.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/feedbacks', pathMatch: 'full' },
  {path: 'feedbacks', loadComponent: () => import('./feedbacks/feedbacks.component').then(m => m.FeedbacksComponent) },
  { path: 'feedbacks/:id', loadComponent: () => import('./feedback-details/feedback-details.component').then(m => m.FeedbackDetailsComponent) },
  { path: 'feedback-form', loadComponent: () => import('./feedback-form/feedback-form.component').then(m => m.FeedbackFormComponent) },
  { path: 'feedback-form/:id', loadComponent: () => import('./feedback-form/feedback-form.component').then(m => m.FeedbackFormComponent) },
  { path: 'roadmap', loadComponent: () => import('./roadmap/roadmap.component').then(m => m.RoadmapComponent ) },
  {path: '**', loadComponent: () => import('./page-404/page-404.component').then(m => m.Page404Component)}
];
