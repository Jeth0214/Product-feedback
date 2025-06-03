import { Component, computed, effect, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { NgClass } from '@angular/common';
import { LoadingComponent } from '../shared/components/loading/loading.component';

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

  
  selectedFeedBack = this._feedbackService.selectedFeedBack; 
  isLoading = this._feedbackService.isLoading;

  // Component properties
  formIcon = '';
  title = '';
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
          this.selectedStatus= this.dropdownValueToTitleCase(feedback.status); // Default to first status
        } 
        else {
          // If no ID is provided, set up the form for creating a new feedback
          this.formIcon = 'assets/shared/icon-new-feedback.svg';
          this.title = 'Create New Feedback';
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
    const data: Partial <IFeedBack> = {
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
      upvotes:  this.selectedFeedBack().upvotes ??  0, // Default upvotes
      comments: this.selectedFeedBack().comments ?? []  // Default empty comments array
    }

    console.log('Data to be submitted:', data);
    if (this.selectedFeedBack() && this.id) {
      this._feedbackService.updateFeedBack(data);
    }
    else {
      this._feedbackService.addFeedBack(data);
      this.feedBackform.reset(); // Reset the form after submission
    }


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
