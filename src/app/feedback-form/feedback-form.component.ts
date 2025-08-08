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
  private _activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private _feedbackService = inject(FeedBackService);
  private _toastrService = inject(ToastrService);
  private _router = inject(Router)
  private _destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);

  
  selectedFeedBack = this._feedbackService.selectedFeedBack; 
  
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
  selectedCategory = this.dropdownValueToTitleCase(this.categories[0]); // Default to first category
  selectedStatus = '';
  

  constructor() {
    // Initialize the component and set up the form
    this._activatedRoute.paramMap.subscribe(params => {
      const idParams = params.get('id');
      this.id = idParams ? +idParams : 0; // Convert idParams to a number or set to 0 if not present
      if (this.id) {
        this._feedbackService.getFeedBackById(this.id); // Fetch feedback details if ID is present
      } 
    });

    effect(() => {
      const feedback = this.selectedFeedBack();
      this.initializeFormEffect(feedback);
    })
  }

  private initializeFormEffect(feedBack: IFeedBack | null) { 
     // If feedback is available and ID is provided, set up the form for editing
    if (feedBack && this.id) {
       this.setUpForm(feedBack);
      this.formIcon = 'assets/shared/icon-edit-feedback.svg';
      this.title = `Editing '${this.selectedFeedBack().title}'`;
      this.selectedCategory = this.dropdownValueToTitleCase(feedBack.category);
      this.selectedStatus = this.dropdownValueToTitleCase(feedBack.status);
      this.submitButtonText = 'Update Feedback';
    }  
    else {
      // If no ID is provided, set up the form for creating a new feedback
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
    this.isLoading = true; // Set loading state to true
    this.submitButtonText = 'Updating...'; // Change button text to indicate update action
    const data: Partial <IFeedBack> = {
      ...this.selectedFeedBack(),
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
  
    }
    this._feedbackService.updateFeedBack(data).pipe(
      finalize(() => { this.isLoading = false; this.submitButtonText = 'Update Feedback' }), // Set loading state to false after the request completes
      takeUntilDestroyed(this._destroyRef) // Automatically clean up subscriptions when the component is destroyed
    ).subscribe({
      next: () => {
        this._toastrService.success('Feedback updated successfully', 'Success'); // Show success message
        this._router.navigate(['/feedbacks']); // Navigate to the feedbacks list
      },
      error: (error: HttpErrorResponse) => {
        this._toastrService.error('Failed to Update feedback', `Status: ${error.status}`); // Show error message
      }
    })
  }
  
  // add new feedback to server
  addFeedBack(formData: Partial<IFeedBack>) {
    this.isLoading = true; // Set loading state to true
    this.submitButtonText = 'Adding...'; // Change button text to indicate add action
    const data: Partial<IFeedBack> = {
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
      upvotes: 0, // Default upvotes
      comments: [] // Default empty comments array
    };
    this._feedbackService.addFeedBack(data).pipe(
      finalize(() => {
        this.isLoading = false // Set loading state to false after the request completes
        this.submitButtonText = 'Add Feedback'; // Reset button text after submission
      }),
      takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: () => {
          this._toastrService.success('Feedback added successfully', 'Success'); // Show success message
          this.feedBackform.reset(); // Reset the form after submission
          this._router.navigate(['/feedbacks']); // Navigate to the feedbacks list
      },
      error: (error: HttpErrorResponse) => {
        this._toastrService.error('Failed to add feedback', `Status: ${error.status}`);
      }
    });
  }
  
  // Delete feedback from server
  deleteFeedBack() {
    this.isLoading = true; // Set loading state to true
    this.deleteButtonText = 'Deleting...'; // Change button text to indicate delete action
    this._feedbackService.deleteFeedBack(this.id).pipe(
      finalize(() => {
        this.isLoading = false; // Set loading state to false after the request completes
        this.deleteButtonText = 'Delete'; // Reset button text after deletion
      }),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe({
      next: () => {
        this._toastrService.success('Feedback deleted successfully', 'Success'); // Show success message
        this._router.navigate(['/feedbacks']); // Navigate to the feedbacks list
      },
      error: (error: HttpErrorResponse) => {
        this._toastrService.error('Failed to delete feedback', `Status: ${error.status}`); // Show error message
      }
    });
  }
  
  goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this._router.navigate(['/feedbacks']);
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
