import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";

@Injectable({
  providedIn: 'root',
})


export class FeedBackService {

  //properties
  api: string = 'api/feedBacks';
 
  // innjections
  _http = inject(HttpClient);

  // signals
  feedBacks = signal<IFeedBack[]>([])

  getFeedBacks(): Observable<IFeedBack[]> {
    return this._http.get<IFeedBack[]>(this.api);
  }

 async getAllFeedBacks(): Promise<IFeedBack[]>{ 
    const response$ = await this._http.get<IFeedBack[]>(this.api);
    const feedBacks = await firstValueFrom(response$)
    return  feedBacks;
  }
}