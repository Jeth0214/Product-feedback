import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})


export class FeedBackService {

  //properties
  api: string = 'api/feedBacks';
 
  // innjections
  _http = inject(HttpClient);
  _toastrService = inject(ToastrService);

  // signals
  feedBacks = signal<IFeedBack[]>([])

  getFeedBacks(): Observable<IFeedBack[]> {
    return this._http.get<IFeedBack[]>(this.api);
  }

 async getAllFeedBacks(): Promise<IFeedBack[]>{ 
    const response$ = await this._http.get<IFeedBack[]>(this.api);
    const feedBacks = await firstValueFrom(response$)
    return  feedBacks ?? [];
  }


  async getFeedBackById(id: number): Promise<IFeedBack> {
    const response$ = await this._http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      catchError(err => {
        this._toastrService.error(err.body.error);
        return [];
      })
    );
    const feedBack = await firstValueFrom(response$);
    return feedBack;
  }

  
}