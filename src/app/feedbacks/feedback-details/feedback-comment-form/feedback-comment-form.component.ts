import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-comment-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './feedback-comment-form.component.html',
  styleUrl: './feedback-comment-form.component.scss'
})
export class FeedbackCommentFormComponent {

  // properties
  title = 'Add Comment';
  maxCharacters = 250;
  remainingCharacters = this.maxCharacters;

  // form
  commentForm: FormGroup;

  // injections
  _fb = inject(FormBuilder);
  
  constructor() {

    // Initialize the commentForm with a form control named 'comment' that has required and maxLength validators
    this.commentForm = this._fb.group({
      comment: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]]
    });
    

    // Listen to user input and update remainingCharacters based on the length of the input
    this.commentForm.get('comment')?.valueChanges.subscribe((value) => {
      this.remainingCharacters = this.maxCharacters - value.length;
      this.remainingCharacters = this.remainingCharacters < 0 ? 0 : this.remainingCharacters;
    });

  }

  // Handle form submission 
  onSubmit() {
    // If the form is invalid, do nothing
    if (this.commentForm.invalid) {
      return;
    }
     // Log the trimmed comment value to the console
    console.log("onSubmit", this.commentForm.value.comment.trim());
  }

}
