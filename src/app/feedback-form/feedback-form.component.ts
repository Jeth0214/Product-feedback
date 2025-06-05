import { Component, computed, DestroyRef, effect, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { NgClass } from '@angular/common';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent, ReactiveFormsModule, NgClass, LoadingComponent],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent  {
  // Injections
  private _activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private _feedbackService = inject(FeedBackService);
  private _toastrService = inject(ToastrService);
  private _router = inject(Router)
  private _destroyRef = inject(DestroyRef);

  
  selectedFeedBack = this._feedbackService.selectedFeedBack; 
  isLoading = false;

  // Component properties
  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';
  submitButtonText = 'Add Feedback';
  id = 0; 


  // form properties
  feedBackform: FormGroup = new FormGroup({});
  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  status = ['Suggestion', 'Planned', 'In-Progress', 'Live'];
  selectedCategory = '';
  selectedStatus = '';
  

  constructor() {
    // Initialize the component and set up the form
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // Get the ID from the route parameters
      if (this.id) {
        this._feedbackService.getFeedBackById(this.id); // Fetch feedback details if ID is present
      } 
      effect(() => {
        const feedback = this.selectedFeedBack();
        console.log('Selected Feedback:', feedback);
        // If feedback is available and ID is provided, set up the form for editing
        if (feedback && this.id) {
          this.setUpForm(feedback);
          this.formIcon = 'assets/shared/icon-edit-feedback.svg';
          this.title = `Editing '${this.selectedFeedBack().title}'`;
          this.selectedCategory = this.dropdownValueToTitleCase(feedback.category);
          this.selectedStatus = this.dropdownValueToTitleCase(feedback.status);
          this.submitButtonText = 'Update Feedback';
        }  
        else {
          // If no ID is provided, set up the form for creating a new feedback
          this.selectedCategory = this.dropdownValueToTitleCase(this.categories[0]); // Default to first category
          this.setUpForm();
        }
      })
    });
  }

  
  // helper method to check if a control has error
  hasError(controlName: string): boolean {
    const control = this.feedBackform.get(controlName);
    return !!(control && control.invalid && control?.touched );
  }


  
  
  setUpForm(feedback?: IFeedBack) {
    // If feedback is provided, populate the form with its data
    // Otherwise, initialize the form with default values
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
    console.log('Form submitted:', this.feedBackform.value);
    if (this.feedBackform.invalid) {
      console.log('Form is invalid. Please fill in all required fields.');
      return;
    }
    const formData = this.feedBackform.value;
    if (this.selectedFeedBack() && this.id) {
      this.updateFeedBack(formData); // Call update method if feedback exists
    }
    else {
      this.addFeedBack(formData); // Call add method if feedback does not exist
    }
  }  
  
  // update feedback to server
  updateFeedBack(formData: Partial<IFeedBack>) {
    const data: Partial <IFeedBack> = {
      ...this.selectedFeedBack(),
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
  
    }
    this._feedbackService.updateFeedBack(data);
  }
  
  // add new feedback to server
  addFeedBack(formData: Partial<IFeedBack>) {
    this.isLoading = true; // Set loading state to true
    const data: Partial<IFeedBack> = {
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
      upvotes: 0, // Default upvotes
      comments: [] // Default empty comments array
    };
    this._feedbackService.addFeedBack(data).pipe(
      finalize(() => this.isLoading = false) ,// Set loading state to false after the request completes
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


  // transform selected Category  to title case
  private dropdownValueToTitleCase(value: string): string {
   // if the value has "-" in it, split it and capitalize each part
    if (value.includes('-')) { 
      return value.split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-');
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }


}
