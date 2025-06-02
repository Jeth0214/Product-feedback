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
export class FeedbackFormComponent implements OnInit {
  // Injections
  _feedbackService = inject(FeedBackService);
  _route = inject(ActivatedRoute);


  formIcon = '';
  title = '';
  isLoading = this._feedbackService.isLoading;


  // Optional input for feedback ID, used for editing existing feedbacks
  // Obtained from the route parameters using  withComponentInputBinding()
  // @Input() id: string | null = ''; 
 id = 0; 
  
  // form properties
  private formBuilder = inject(FormBuilder);
  feedBackform: FormGroup = new FormGroup({});
  categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  status = ['Suggestion', 'Planned', 'In-Progress', 'Live'];
  selectedFeedBack = this._feedbackService.selectedFeedBack; 
  selectedCategory = '';
  selectedStatus = '';
  

  // getfeedBackEffect = effect(() => {
  //   const feedback = this.selectedFeedBack();
  //   if (feedback && this.id) {

  //     this.setUpForm(feedback);
  //     this.selectedCategory = this.dropdownValueToTitleCase(feedback.category);
  //     this.formIcon = 'assets/shared/icon-edit-feedback.svg';
  //     this.title = `Editing '${this.selectedFeedBack().title}'`;
  //   }      
  // })

  constructor() {
    // Initialize the component and set up the form
    this._route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // Get the ID from the route parameters
      if (this.id) {
        this._feedbackService.getFeedBackById(this.id); // Fetch feedback details if ID is present
      } 
      effect(() => {
        const feedback = this.selectedFeedBack();
        // If feedback is available and ID is provided, set up the form for editing
        if (feedback && this.id) {
          console.log('Feedback:', feedback);
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


  


  ngOnInit() {
    // if (this.id) {
    //   // If an ID is provided, fetch the feedback details
    //   this._feedbackService.getFeedBackById(+this.id);  
    // } else {
    //   // If no ID is provided, set up the form for creating a new feedback
    //   this.selectedCategory = this.dropdownValueToTitleCase(this.categories[0]); // Default to first category
    //   this.selectedStatus= this.dropdownValueToTitleCase(this.status[0]); // Default to first status
    //   this.setUpForm();
    // }
  
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

  onSelectStatus(status: string) {
    this.selectedStatus = status.toLowerCase();
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
      status: this.selectedStatus.toLowerCase(), // Ensure status is in lowercase
      upvotes: 0, // Default upvotes
      comments: [] // Default empty comments array
    }
    this._feedbackService.addFeedBack(data);

  }

  // transform selected Category  to title case
 private dropdownValueToTitleCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }


}
