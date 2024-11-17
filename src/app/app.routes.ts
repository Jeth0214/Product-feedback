import { Routes } from '@angular/router';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';

export const routes: Routes = [
  { path: '', redirectTo: '/product-feedback', pathMatch: 'full'},
  { path: 'product-feedback', component: ProductFeedbackComponent }
];
