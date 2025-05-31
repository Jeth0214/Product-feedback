import { Component, computed, effect, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent, ReactiveFormsModule, NgClass],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent implements OnInit {
  // Injections
  _feedbackService = inject(FeedBackService);


  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';
  isLoading = false; // Subject to change based on loading signal state


  // Optional input for feedback ID, used for editing existing feedbacks
  // Obtained from the route parameters using  withComponentInputBinding()
  @Input() id: string | null = ''; 
  
  // form properties
  private formBuilder = inject(FormBuilder);
  feedBackform: FormGroup = new FormGroup({});
  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  selectedFeedBack = this._feedbackService.selectedFeedBack; // Used for editing feedbacks
  selectedCategory = ''; // Default selected category, can be updated based on feedback
  

  getfeedBackEffect = effect(() => {
    const feedback = this.selectedFeedBack();
    if (feedback) {

      this.setUpForm(feedback);
      this.selectedCategory = this.selectedCategoryTitleCase(feedback.category);
      this.formIcon = 'assets/shared/icon-edit-feedback.svg';
      this.title = `Editing'${this.selectedFeedBack().title}'`;
    }      
  })


  
  // helper method to check if a control has error
  hasError(controlName: string): boolean {
    const control = this.feedBackform.get(controlName);
    return !!(control && control.invalid && control?.touched );
  }


  


  ngOnInit() {
    if (this.id) {
      // If an ID is provided, fetch the feedback details
      this._feedbackService.getFeedBackById(+this.id);  
    } else {
      // If no ID is provided, set up the form for creating a new feedback
      this.selectedCategory = this.selectedCategoryTitleCase(this.categories[0]); // Default to first category
      this.setUpForm();
    }
  
  }
  
  setUpForm(feedback?: IFeedBack) {
    // If feedback is provided, populate the form with its data
    // Otherwise, initialize the form with default values

    this.feedBackform = this.formBuilder.group({
      title: [feedback?.title ?? '', [Validators.required, Validators.minLength(5)]],
      description: [feedback?.description ?? '', [Validators.required, Validators.minLength(20)]],
    });

   }

  onSelectCategory(category: string) {
    this.selectedCategory = category.toLowerCase();
  }

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.feedBackform.invalid) {
      console.log('Form is invalid');
      return;
    } 

    const formData = this.feedBackform.value;
    const data: Partial <IFeedBack> = {
      ...formData,
      category: this.selectedCategory.toLowerCase(), // Ensure category is in lowercase
      status: 'suggestion', // Default status
      upvotes: 0, // Default upvotes
      comments: [] // Default empty comments array
    }
    this._feedbackService.addFeedBack(data);

  }

  // transform selected Category  to title case
 private selectedCategoryTitleCase(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }


}
