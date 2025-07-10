import { NgClass } from '@angular/common';
import { Component, computed, DestroyRef, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-comment-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
// injections
private _fb = inject(FormBuilder);
private destroyRef$ = inject(DestroyRef);
  

 // properties
 maxCharacters = 250;
remainingCharacters = this.maxCharacters;
  

 isReply = input.required<boolean>();
 isCommenting = input.required<boolean>();
 buttonText = computed( () => { return this.isReply() ? 'Reply': 'Comment' }) 
 commentContent = output<string>()

  
 // form
 commentForm: FormGroup  = new FormGroup({});



 ngOnInit() {
      // Initialize the commentForm with a form control named 'comment' that has required and maxLength validators
      this.commentForm = this._fb.group({
        comment: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]]
      });


      // Listen to user input and update remainingCharacters based on the length of the input
      this.commentForm.get('comment')?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(value => {
      const length = value?.length || 0;
      this.remainingCharacters = Math.max(0, this.maxCharacters - length);
      });
 }

 /**
* Handles the form submission.
* If the form is invalid, it does nothing.
* Otherwise, it emits the trimmed comment data and resets the form.
*/
 onSubmit() {
   if (this.commentForm.invalid) return;
   const commentTrimmed = this.commentForm.value.comment.trim();
   console.log(commentTrimmed);
   this.commentContent.emit(commentTrimmed);
   this.commentForm.reset();
   this.remainingCharacters = 250;
  }
  
}
