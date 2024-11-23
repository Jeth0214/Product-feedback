import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";

@Injectable({
  providedIn: 'root',
})


export class FeedBackService {

  //properties
  api: string = 'api/feedBacks';
 
  // innjections
  _http = inject(HttpClient);

  getFeedBacks(): Observable<IFeedBack[]> {
    return this._http.get<IFeedBack[]>(this.api);
  }
}