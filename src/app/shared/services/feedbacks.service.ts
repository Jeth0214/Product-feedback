import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})


export class FeedBackService {

  //properties
  api: string = 'api/feedBacks';
 
  // innjections
  _http = inject(HttpClient);
  _toastrService = inject(ToastrService);
  _router = inject(Router);

  // signals
  feedBacks = signal<IFeedBack[]>([])

  getFeedBacks(): Observable<IFeedBack[]> {
    return this._http.get<IFeedBack[]>(this.api);
  }
// Fetches all feedbacks from the API
 async getAllFeedBacks(): Promise<IFeedBack[]>{ 
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

// Updates an existing feedback in the API and updates the feedbacks signal
async updateFeedback(id: number, feedback: IFeedBack): Promise<IFeedBack> {
  const response$ = await this._http.put<IFeedBack>(`${this.api}/${id}`, feedback).pipe(
    catchError(
      this.handleError<IFeedBack>('Update Feedback', {} as IFeedBack)
  ));
  const updatedFeedback = await firstValueFrom(response$);
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