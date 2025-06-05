import { computed, DestroyRef, effect, inject, Injectable, OnDestroy, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, finalize, firstValueFrom, Observable, of, Subject, tap } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { IFeedBack } from "../models/feedbacks.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { IComment } from "../models/comment.model";
import { takeUntilDestroyed, toSignal  } from "@angular/core/rxjs-interop";
import { LoadingService } from "./loading.service";


@Injectable({
  providedIn: 'root',
})


export class FeedBackService  {

  //properties
  private api: string = 'api/feedBacks';
  private destroy$ = inject(DestroyRef)
 
  // innjections
  private _http = inject(HttpClient);
  private _toastrService = inject(ToastrService);
  private _router = inject(Router);
  private _loadingService = inject(LoadingService);
  


  // signals
  private feedBacks = signal<IFeedBack[]>([]);
  selectedFeedBack = signal<IFeedBack>({} as IFeedBack); 
  categoryTerm = signal('All');
  sortValue = signal('Most Upvotes');
  isLoading = signal(false);


  filteredFeedBacks = computed(() => {
    const category = this.categoryTerm();
    const feedBacks = this.feedBacks();
    const sortValue = this.sortValue();

    // First, filter the feedbacks by category
    let filtered = this.filterFeedBacksByCategory(category, feedBacks);

    // Then, sort the filtered feedbacks based on the selected sort value
    let sorted = this.sortFeedBacksByValue(sortValue, filtered);

    return sorted;
  })


  
  // Fetches all feedbacks from the API and sets the feedbacks signal
  getAllFeedBacks() { 
    this._loadingService.loadingOn();
    this._http.get<IFeedBack[]>(this.api)
      .pipe(
        tap(
          (response) =>this.feedBacks.set(response)
        ),
        catchError(
        this.handleError<IFeedBack[]>('Get All Feedbacks', [] as IFeedBack[])
        ),
        takeUntilDestroyed(this.destroy$) // Clean up subscription when the service is destroyed
      ).subscribe(response => { 
        this._loadingService.loadingOff();
      });
    
  }

// Fetches a specific feedback by its ID from the API
  getFeedBackById(id: number) {
    this._loadingService.loadingOn();
    this._http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      catchError( 
        this.handleError<IFeedBack>('Get Feedback By id', {} as IFeedBack)
      ),
      takeUntilDestroyed(this.destroy$) // Clean up subscription when the service is destroyed
    ).subscribe((response) => {
      this._loadingService.loadingOff();
    this.selectedFeedBack.set(response)
    } );
  }

  // Adds a new feedback to the API and updates the feedbacks signal
  // addFeedBack(feedback: Partial<IFeedBack>) {
  //   this.isLoading.set(true);
  //   this._http.post<IFeedBack>(this.api + 's', feedback)
  //     .pipe(
  //       catchError(
  //         this.handleError<IFeedBack>('Add Feedback', {} as IFeedBack)
  //       ),
  //       finalize( () => this.isLoading.set(false)),
  //       takeUntilDestroyed(this.destroy$) // Clean up subscription when the service is destroyed
  //     )
  //     .subscribe((newFeedback) => {
  //       this.feedBacks.update((current) => [...current, newFeedback]);
  //       this._toastrService.success('Feedback added successfully', 'Success');
  //       this._router.navigate(['/feedbacks']);
  //      })
  // }

  // Adds a new feedback to the API using Obervable
  addFeedBack(feedback: Partial<IFeedBack>): Observable<IFeedBack> {
   return this._http.post<IFeedBack>(this.api, feedback)
  }

  

  // Updates an existing feedback in the API and updates the feedbacks signal
  // !! NOTE : angular-in-memory-web-api PUT method did not return the updated object, 
  // !! so we are returning the same object that was sent to the API if successful
  // updateFeedBack(feedback: Partial<IFeedBack>) {
  //     this.isLoading.set(true);
  //   this._http.put<IFeedBack>(this.api, feedback).pipe(
  //     catchError(this.handleError<IFeedBack>('Update Feedback', {} as IFeedBack)),
  //     finalize(() => this.isLoading.set(false)),
  //   ).subscribe(() => {
  //     this._toastrService.success(`Feedback with ${feedback.id} updated successfully`, 'Success');
  //   });
  // }
  
  updateFeedBack(feedback: Partial<IFeedBack>): Observable<IFeedBack> {
    return this._http.put<IFeedBack>(this.api, feedback)
  }
  


// Deletes a feedback from the API and updates the feedbacks signal
async deleteFeedback(id: number): Promise<void> {
  const response$ = await this._http.delete<void>(`${this.api}/${id}`).pipe(
    catchError(
      this.handleError<void>('Delete Feedback')
  ));
  await firstValueFrom(response$);
  this.feedBacks.update((current) => current.filter(fb => fb.id !== id));
  }
  


  // error handling 
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // show error alert message
    this._toastrService.error(`${operation} failed: ${error.body.error}`,  `Status: ${error.status}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }
  

  // Filter Setter
  setCategoryTerm(category: string) {
    this.categoryTerm.set(category);
  }

  // Sort Setter
  setSortValue(value: string) {
    this.sortValue.set(value);
  }

  // get all comments lenght for a specific feedback
  private getCommentsLength(feedBack: IFeedBack): number {
    if (!feedBack.comments) return 0;
    return feedBack.comments.reduce((count, comment) => {
      const replies = comment.replies ? comment.replies.length : 0;
      return count + 1 + replies;
     },0);
  }

  // filter feedbacks by category
  private filterFeedBacksByCategory(category: string, feedBacks: IFeedBack[]): IFeedBack[] {
    if (category === 'All') {
      return feedBacks;
    } else {
      return feedBacks.filter((feedback: IFeedBack) => feedback.category.toLowerCase() === category.toLowerCase());
    }
  }

  // sort feedbacks by sort value
  private sortFeedBacksByValue(sortValue: string, feedBacks: IFeedBack[]): IFeedBack[] {
    switch (sortValue) {
      case 'Most Upvotes':
        return feedBacks.sort((a, b) => b.upvotes - a.upvotes);
      case 'Least Upvotes':
        return feedBacks.sort((a, b) => a.upvotes - b.upvotes);
      case 'Most Comments':
        return feedBacks.sort((a, b) => this.getCommentsLength(b) - this.getCommentsLength(a));
      case 'Least Comments':
        return feedBacks.sort((a, b) => this.getCommentsLength(a) - this.getCommentsLength(b));
      default:
        return feedBacks;
    }
  }

  
}


