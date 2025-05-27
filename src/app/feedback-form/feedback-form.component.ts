import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent, ReactiveFormsModule,],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent implements OnInit {

  formIcon = 'assets/shared/icon-new-feedback.svg';
  title = 'Create New Feedback';
  isLoading = false; // Subject to change based on loading state

  
  // Default selected category and transform it to title case
  // This should be set based on the feedback to be updated 
  // or set to a default value base on first element of categories.
  // selectedCategory = this.selectedCategoryTitleCase('bug');
  
  
  // form properties
  private formBuilder = inject(FormBuilder);
  feedBackform: FormGroup = new FormGroup({});
  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  selectedCategory = this.categories[0]; // Default to 'feature'

  // Injections
  _feedbackService = inject(FeedBackService);

  ngOnInit() {
    this.setUpForm();
  }
  
  setUpForm() {
    this.feedBackform = this.formBuilder.group({
      title: ['', Validators.required],
      category: [this.selectedCategory.toLowerCase()],
      description: ['', Validators.required],
    });
   }

  onSelectCategory(category: string) {
    this.feedBackform.patchValue({ category: category.toLowerCase() });
  }

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.feedBackform.invalid) {
      console.log('Form is invalid');
      return;
    } 

    const formData = this.feedBackform.value;
    const data: Partial <IFeedBack> = {
      title: formData.title,
      category: this.selectedCategory,
      description: formData.description,
      status: 'suggestion', // Default status
      upvotes: 0, // Default upvotes
      comments: [] // Default empty comments array
    }
    console.log('Form submitted with data:', formData);
    console.log('data:', data);
    // Here you can handle the form submission, e.g., send it to a server
    this._feedbackService.addFeedBack(data);

  }

  // transform selected Category  to title case
 private selectedCategoryTitleCase(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }


}
