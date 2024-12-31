import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';
import { feedBackDetailsResolver } from './feedbacks/feedback-details/feedback-details.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'feedbacks/:feedBackId', resolve: { feedBackDetails: feedBackDetailsResolver } , loadComponent: () => import('./feedbacks/feedback-details/feedback-details.component').then(m => m.FeedbackDetailsComponent) },
  { path: 'roadmap', loadComponent: () => import('./roadmap/roadmap.component').then(m => m.RoadmapComponent ) },
  {path: '**', loadComponent: () => import('./page-404/page-404.component').then(m => m.Page404Component)}
];
