import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { IComment } from "../models/comment.model";

@Injectable({
  providedIn: 'root',
})


export class FeedBackService {

  //properties
  api: string = 'api/feedBacks';

  jsonAPI: string = 'https://jsonplaceholder.typicode.com/posts';

  CAAPI = 'http://localhost:8000/api/departments'
 
  // innjections
  _http = inject(HttpClient);
  _toastrService = inject(ToastrService);
  _router = inject(Router);


  async addPOst(): Promise<any> {
    let data = {
      name: 'Test Department',  
    };
    const response$ = await this._http.post(this.CAAPI, data).pipe(
      tap((response) => console.log('Post response', response)),
      catchError(
        this.handleError<any>('Add Post', {})
    ));
    const newPost = await firstValueFrom(response$);
    return newPost;
    
  }

  addPostObservable(): Observable<any> {
      let data = {
      name: 'Test Department',  
    };
    return  this._http.post(this.CAAPI, data).pipe(
      tap((response) => console.log('Post response', response)),
      catchError(
        this.handleError<any>('Add Post', {})
    ));
   }

  // signals
  feedBacks = signal<IFeedBack[]>([])

// Fetches all feedbacks from the API
 async getAllFeedBacks(): Promise<IFeedBack[]> { 
    const response$ = await this._http.get<IFeedBack[]>(this.api).pipe(
      catchError(
        this.handleError<IFeedBack[]>('Get All Feedbacks', [] as IFeedBack[])
    ));;
   const feedBacks = await firstValueFrom(response$);
    return  feedBacks ?? [];
  }

// Fetches a specific feedback by its ID from the API
async getFeedBackById(id: number): Promise<IFeedBack> {
    const response$ = await this._http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      catchError(
        this.handleError<IFeedBack>('Get Feedback By id', {} as IFeedBack)
    ));
    const feedBack = await firstValueFrom(response$);
    return feedBack;
  }

  // Adds a new feedback to the API and updates the feedbacks signal
async addFeedback(feedback: Partial<IFeedBack>): Promise<IFeedBack> {
  const response$ = await this._http.post<IFeedBack>(this.api, feedback).pipe(
    catchError(
      this.handleError<IFeedBack>('Add Feedback', {} as IFeedBack)
  ));
  const newFeedback = await firstValueFrom(response$);
  this.feedBacks.update((current) => [...current, newFeedback]);
  return newFeedback;
  }
  
  addFeedBackObservable(feedback: Partial<IFeedBack>): Observable<IFeedBack> { 
    return this._http.post<IFeedBack>(this.api, feedback);
  }

// Updates an existing feedback in the API and updates the feedbacks signal
async updateFeedback(id: number, feedback: IFeedBack): Promise<IFeedBack> {
  const response$ = await this._http.put<IFeedBack>(this.api, feedback).pipe(
    tap((response) => console.log('Feedback updated response', response)),
    catchError(
      this.handleError<IFeedBack>('Update Feedback', {} as IFeedBack)
  ));
  const updatedFeedback = await firstValueFrom(response$);
  console.log('Updated from service', updatedFeedback);
  this.feedBacks.update((current) => current.map(fb => fb.id === id ? updatedFeedback : fb));
  return updatedFeedback;
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
  

  // add comment to feedback in the API and updates the feedbacks signal
  async addComment(feedbackId: number, commentData: Partial<IComment>): Promise<void> {

    const feedback = computed(() => this.feedBacks().filter(fb => fb.id === feedbackId));
    console.log('feedback', feedback());

    // const response$ = await this._http.post<IComment>(`${this.api}/${feedbackId}/comments`, commentData).pipe(
    //   catchError(
    //     this.handleError<IComment>('Add Comment', {} as IComment)
    // ));
    // const newComment = await firstValueFrom(response$);

    // console.log('newComment', newComment);
    //     this.feedBacks.update((current) => current.map(fb => {
    //     if (fb.id === feedbackId) {
    //         const comments = fb.comments ?? [];
    //         return { ...fb, comments: [...comments, newComment] };
    //     }
    // }));
   }

  // error handling 
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead

    // show error alert message
    this._toastrService.error(`${operation} failed: ${error.body.error}`, 'Error');

    this._router.navigate(['/']);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  
}