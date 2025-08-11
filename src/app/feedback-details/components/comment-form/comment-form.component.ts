import { NgClass } from '@angular/common';
import { Component, computed, DestroyRef, effect, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
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
private fb = inject(FormBuilder);
private destroyRef$ = inject(DestroyRef);
  

 maxCharacters = 250;
remainingCharacters = this.maxCharacters;
  

 isReply = input.required<boolean>();
 isCommenting = input.required<boolean>();
 buttonText = computed( () => { return this.isReply() ? 'Reply': 'Comment' }) 
 commentContent = output<string>()
  
 // form
 commentForm: FormGroup  = new FormGroup({});


 ngOnInit() {

    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]]
    });
  
    this.commentForm.get('comment')?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(value => {
        const length = value?.length || 0;
        this.remainingCharacters = Math.max(0, this.maxCharacters - length);
    });
 }

 onSubmit() {
   if (this.commentForm.invalid) return;
   const commentTrimmed = this.commentForm.value.comment.trim();
   this.commentContent.emit(commentTrimmed);
   this.commentForm.reset();
   this.remainingCharacters = 250;
  }
  
}
