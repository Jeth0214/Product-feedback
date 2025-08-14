import { Component, computed, DestroyRef, effect, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IFeedBack } from '../shared/models/feedbacks.model';
import { FeedBackService } from '../shared/services/feedbacks.service';
import { Location, NgClass } from '@angular/common';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FeedbackCategory } from '../shared/Enums/category.enum';

@Component({
  selector: 'app-feedback-form',
  imports: [RouterLink, DropdownComponent, ReactiveFormsModule, NgClass, LoadingComponent],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})
export class FeedbackFormComponent {
  // Injections
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private feedbackService = inject(FeedBackService);
  private toastrService = inject(ToastrService);
  private router = inject(Router)
  private destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);

  //signals
  selectedFeedBack = this.feedbackService.selectedFeedBack; 
  isFetchingFeedBack = this.feedbackService.isFetchingSelectedFeedBack;
  isSaving = signal(false);
  isDeleting = signal(false);
  id = signal(0); 
  
  // Form and UI State
  feedBackform: FormGroup = new FormGroup({});
  categories = Object.keys(FeedbackCategory);
  statuses = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

  selectedCategory = signal(this.dropdownValueToTitleCase(this.categories[0]));
  selectedStatus = signal('');

  // Route parameter to get feedback ID
  idParam = toSignal(this.activatedRoute.paramMap);

  // Computed properties based on Action
  deleteButtonText = computed(() => {
    return this.isDeleting() ? 'Deleting...' : 'Delete';
  });

  saveButtonText = computed(() => {
    return this.isSaving() ? 'Saving...' : (this.selectedFeedBack() ? ' Update Feedback' : 'Add Feedback');
  });

  title = computed(() => {
    return this.selectedFeedBack() ? `Editing '${this.selectedFeedBack().title}'` : 'Create New Feedback';
  });

  formIcon = computed(() => {
    return this.selectedFeedBack() ? 'assets/shared/icon-edit-feedback.svg' : 'assets/shared/icon-new-feedback.svg';
  });


  

  constructor() {
    effect(() => {
      const idParams = +(this.idParam()?.get('id') ?? 0);
      if (idParams) {
        this.id.set(idParams); // Set the id signal
        this.feedbackService.getFeedBackById(this.id());
      }
    });

    effect(() => {
      const feedback = this.selectedFeedBack();
      this.initializeForm(feedback, this.id());
    })
  }

   initializeForm(feedBack: IFeedBack | null, id: number) { 
    if (feedBack && id) {
      // Edit Mode
       this.setUpForm(feedBack);
      this.selectedCategory.set(this.dropdownValueToTitleCase(feedBack.category));
      this.selectedStatus.set(this.dropdownValueToTitleCase(feedBack.status));
    }  
    else {
      // Create Mode
      this.selectedCategory.set(this.dropdownValueToTitleCase(this.categories[0]));
      this.setUpForm();
    }
    
  }
  setUpForm(feedback?: IFeedBack) {
    this.feedBackform = this.formBuilder.group({
      title: [feedback?.title ?? '', [Validators.required, Validators.minLength(5)]],
      description: [feedback?.description ?? '', [Validators.required, Validators.minLength(5)]],
    });
  }

  
  // helper method to check if a control has error
  hasError(controlName: string): boolean {
    const control = this.feedBackform.get(controlName);
    return !!(control && control.invalid && control.touched );
  }

  

  onSelectCategory(category: string) {
    this.selectedCategory.set(category.toLowerCase());
  }

  onSelectStatus(status: string) {
    this.selectedStatus.set(status.toLowerCase());
  }

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.feedBackform.invalid) return;

    const formData = this.feedBackform.value;
    const isUpdateMode = !!this.selectedFeedBack() && !!this.id();
    const payload = this.setPayload(isUpdateMode);
    if (isUpdateMode) {
      this.updateFeedBack(formData); 
    }
    else {
      this.addFeedBack(formData);
    }
  }  


  setPayload(isUpdate: boolean): Partial<IFeedBack> {
    const basePayLoad = isUpdate ? this.selectedFeedBack() : { upvotes: 0, comments: [] };
    const formData = this.feedBackform.value;
    
    return {
      ...basePayLoad,
      ...formData,
      category: this.selectedCategory().toLowerCase(),
        ...(isUpdate ? { status: this.selectedStatus().toLowerCase() } : {})
    };
  }
  
  // update feedback to server
  updateFeedBack(formData: Partial<IFeedBack>) {

    // const data: Partial <IFeedBack> = {
    //   ...this.selectedFeedBack(),
    //   ...formData,
    //   category: this.selectedCategory.toLowerCase(),
    //   status: this.selectedStatus.toLowerCase(),
  
    // }
    this.isSaving.set(true);
    this.feedbackService.updateFeedBack(formData).pipe(
      finalize(() => { this.isSaving.set(false); }),
      takeUntilDestroyed(this.destroyRef) 
    ).subscribe({
      next: () => {
        this.toastrService.success('Feedback updated successfully', 'Success');
        this.router.navigate(['/feedbacks']);
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to Update feedback', `Status: ${error.status}`);
      }
    })
  }
  
  // add new feedback to server
  addFeedBack(formData: Partial<IFeedBack>) {
    this.isSaving.set(true);
    const data: Partial<IFeedBack> = {
      ...formData,
      // category: this.selectedCategory.toLowerCase(),
      // status: this.selectedStatus.toLowerCase(),
      upvotes: 0, 
      comments: [] 
    };
    this.feedbackService.addFeedBack(data).pipe(
      finalize(() => {
        this.isSaving.set(false);

      }),
      takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.toastrService.success('Feedback added successfully', 'Success');
          this.feedBackform.reset();
          this.router.navigate(['/feedbacks']);
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to add feedback', `Status: ${error.status}`);
      }
    });
  }
  
  // Delete feedback from server
  deleteFeedBack() {
    this.feedbackService.deleteFeedBack(this.id()).pipe(
      finalize(() => {
        this.isDeleting.set(false)
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => {
        this.toastrService.success('Feedback deleted successfully', 'Success'); 
        this.router.navigate(['/feedbacks']); 
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error('Failed to delete feedback', `Status: ${error.status}`);
      }
    });
  }
  
  goBack() {
    if(window.history.length > 1) {
      this.location.back(); 
    } else {
      this.router.navigate(['/feedbacks']);
    }
  }


  // transform selected Category  to title case
  private dropdownValueToTitleCase(value: string): string {
    if (!value) return '';
    return value.includes('-')
      ? value.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-')
      : value.charAt(0).toUpperCase() + value.slice(1);
  }




}
