import { NgClass } from '@angular/common';
import { Component, computed, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-comment-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './feedback-comment-form.component.html',
  styleUrl: './feedback-comment-form.component.scss'
})
export class FeedbackCommentFormComponent {

  // properties
  maxCharacters = 250;
  remainingCharacters = this.maxCharacters;
  @Input() isReply: boolean = false;
  @Input() buttonText: string = 'Post Comment';
  @Output() comment = new EventEmitter();

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
      this.remainingCharacters = this.maxCharacters - value?.length;
      this.remainingCharacters = this.remainingCharacters < 0 ? 0 : this.remainingCharacters;
    });

  }

  /**
 * Handles the form submission.
 * If the form is invalid, it does nothing.
 * Otherwise, it emits the trimmed comment data and resets the form.
 */
  onSubmit() {
    if (this.commentForm.invalid) {
      return;
    }
    const commentData = this.commentForm.value.comment.trim();
    this.comment.emit(commentData);
    this.commentForm.reset();
  }

}
