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

 async getAllFeedBacks(): Promise<IFeedBack[]>{ 
    const response$ = await this._http.get<IFeedBack[]>(this.api).pipe(
      catchError(
        this.handleError<IFeedBack[]>('Get All Feedbacks', [] as IFeedBack[])
    ));;
   const feedBacks = await firstValueFrom(response$);
    return  feedBacks ?? [];
  }


  async getFeedBackById(id: number): Promise<IFeedBack> {
    const response$ = await this._http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      catchError(
        this.handleError<IFeedBack>('Get Feedback By id', {} as IFeedBack)
    ));
    const feedBack = await firstValueFrom(response$);
    return feedBack;
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