import { Component, computed, DestroyRef, effect, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { Location, NgClass } from '@angular/common';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FeedbackCategory } from '../shared/Enums/category.enum';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent, ReactiveFormsModule, NgClass, LoadingComponent],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {
  // Injections
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private feedbackService = inject(FeedBackService);
  private toastrService = inject(ToastrService);
  private router = inject(Router)
  private destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);

  
  selectedFeedBack = this.feedbackService.selectedFeedBack; 
  
  // Component properties
  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';
  submitButtonText = 'Add Feedback';
  deleteButtonText = 'Delete';
  id = 0; 
  isLoading = false;


  // form properties
  feedBackform: FormGroup = new FormGroup({});
  categories = Object.keys(FeedbackCategory);
  statuses = ['Suggestion', 'Planned', 'In-Progress', 'Live'];;
  selectedCategory = this.dropdownValueToTitleCase(this.categories[0]);
  selectedStatus = '';
  

  constructor() {
    // Initialize the component and set up the form
    this.activatedRoute.paramMap.subscribe(params => {
      const idParams = params.get('id');
      this.id = idParams ? +idParams : 0; 
      if (this.id) {
        this.feedbackService.getFeedBackById(this.id);
      } 
    });

    effect(() => {
      const feedback = this.selectedFeedBack();
      this.initializeFormEffect(feedback);
    })
  }

  private initializeFormEffect(feedBack: IFeedBack | null) { 
    if (feedBack && this.id) {
       this.setUpForm(feedBack);
      this.formIcon = 'assets/shared/icon-edit-feedback.svg';
      this.title = `Editing '${this.selectedFeedBack().title}'`;
      this.selectedCategory = this.dropdownValueToTitleCase(feedBack.category);
      this.selectedStatus = this.dropdownValueToTitleCase(feedBack.status);
      this.submitButtonText = 'Update Feedback';
    }  
    else {
      this.selectedCategory = this.dropdownValueToTitleCase(this.categories[0]); // Default to first category
      this.setUpForm();
    }
    
  }

  
  // helper method to check if a control has error
  hasError(controlName: string): boolean {
    const control = this.feedBackform.get(controlName);
    return !!(control && control.invalid && control?.touched );
  }

  setUpForm(feedback?: IFeedBack) {
    this.feedBackform = this.formBuilder.group({
      title: [feedback?.title ?? '', [Validators.required, Validators.minLength(5)]],
      description: [feedback?.description ?? '', [Validators.required, Validators.minLength(5)]],
    });
  }
  

  onSelectCategory(category: string) {
    this.selectedCategory = category.toLowerCase();
  }

  onSelectStatus(status: string) {
    this.selectedStatus = status.toLowerCase();
  }

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.feedBackform.invalid) return;
    const formData = this.feedBackform.value;
    if (this.selectedFeedBack() && this.id) {
      this.updateFeedBack(formData); 
    }
    else {
      this.addFeedBack(formData);
    }
  }  
  
  // update feedback to server
  updateFeedBack(formData: Partial<IFeedBack>) {
    this.isLoading = true; 
    this.submitButtonText = 'Updating...';
    const data: Partial <IFeedBack> = {
      ...this.selectedFeedBack(),
      ...formData,
      category: this.selectedCategory.toLowerCase(),
      status: this.selectedStatus.toLowerCase(),
  
    }
    this.feedbackService.updateFeedBack(data).pipe(
      finalize(() => { this.isLoading = false; this.submitButtonText = 'Update Feedback' }),
      takeUntilDestroyed(this.destroyRef) 
    ).subscribe({
      next: () => {
        this.toastrService.success('Feedback updated successfully', 'Success');
        this.router.navigate(['/feedbacks']);
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to Update feedback', `Status: ${error.status}`);
      }
    })
  }
  
  // add new feedback to server
  addFeedBack(formData: Partial<IFeedBack>) {
    this.isLoading = true; // Set loading state to true
    this.submitButtonText = 'Adding...'; 
    const data: Partial<IFeedBack> = {
      ...formData,
      category: this.selectedCategory.toLowerCase(),
      status: this.selectedStatus.toLowerCase(),
      upvotes: 0, 
      comments: [] 
    };
    this.feedbackService.addFeedBack(data).pipe(
      finalize(() => {
        this.isLoading = false 
        this.submitButtonText = 'Add Feedback';
      }),
      takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.toastrService.success('Feedback added successfully', 'Success');
          this.feedBackform.reset();
          this.router.navigate(['/feedbacks']);
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to add feedback', `Status: ${error.status}`);
      }
    });
  }
  
  // Delete feedback from server
  deleteFeedBack() {
    this.isLoading = true; 
    this.deleteButtonText = 'Deleting...'; 
    this.feedbackService.deleteFeedBack(this.id).pipe(
      finalize(() => {
        this.isLoading = false;
        this.deleteButtonText = 'Delete';
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => {
        this.toastrService.success('Feedback deleted successfully', 'Success'); 
        this.router.navigate(['/feedbacks']); 
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to delete feedback', `Status: ${error.status}`);
      }
    });
  }
  
  goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this.router.navigate(['/feedbacks']);
    }
  }


  // transform selected Category  to title case
  private dropdownValueToTitleCase(value: string): string {
    if (!value) return '';
    return value.includes('-')
      ? value.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-')
      : value.charAt(0).toUpperCase() + value.slice(1);
  }




}
