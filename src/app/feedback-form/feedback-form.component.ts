import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

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

  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

  // Default selected category and transform it to title case
  // This should be set based on the feedback to be updated 
  // or set to a default value base on first element of categories.
  // selectedCategory = this.selectedCategoryTitleCase('bug');
  
  selectedCategory = this.categories[0]; // Default to 'feature'


  // form properties
  private formBuilder = inject(FormBuilder);
  feedBackform: FormGroup = new FormGroup({});

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
    console.log('Form submitted with data:', formData);
    // Here you can handle the form submission, e.g., send it to a server
  }

  // transform selected Category  to title case
 private selectedCategoryTitleCase(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }


}
