import { computed, DestroyRef, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { finalize, Observable, tap } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IUser } from "../models/user.model";
import { IComment } from "../models/comment.model";
import { IReplyInit } from "../models/replies.model";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root',
})


export class FeedBackService  {

  //core
  private readonly api: string = 'api/feedBacks';
  
  // Dependencies
  private readonly http = inject(HttpClient);
  private destroy$ = inject(DestroyRef);
  private authService = inject(AuthService)

  // signals
  private readonly feedBacks = signal<IFeedBack[]>([]);
  readonly selectedFeedBack = signal<IFeedBack>({} as IFeedBack); 
  readonly categoryTerm = signal('All');
  readonly sortValue = signal('Most Upvotes');


  
  // loading signals
  readonly isFetchingFeedBacks = signal(false);
  readonly isFetchingSelectedFeedBack = signal(false);
  readonly isUpVotingFeedback = signal(false);

  readonly filteredFeedBacks = computed(() => {
    const filtered = this.categoryTerm() === 'All'
      ? this.feedBacks()
      : this.feedBacks().filter(fb => 
        fb.category.toLowerCase() === this.categoryTerm().toLowerCase()
      )
    
    return this.sortFeedBacks( this.sortValue(), filtered)
  })


  // Public Methods
  getAllFeedBacks() { 
    this.isFetchingFeedBacks.set(true);
    this.http.get<IFeedBack[]>(this.api)
      .pipe(
        tap((response) => this.feedBacks.set(response)),
        finalize(() => this.isFetchingFeedBacks.set(false)),
        takeUntilDestroyed(this.destroy$)
      ).subscribe();
    
  }

// Fetches a specific feedback by its ID from the API
  getFeedBackById(id: number) {
    this.isFetchingSelectedFeedBack.set(true);
    this.http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      tap(( response ) => this.selectedFeedBack.set(response)),
      finalize(() => this.isFetchingSelectedFeedBack.set(false)),
      takeUntilDestroyed(this.destroy$) 
    ).subscribe();
  }




  addFeedBack(feedback: Partial<IFeedBack>): Observable<IFeedBack> {
   return this.http.post<IFeedBack>(this.api, feedback)
  }

  
  
  updateFeedBack(feedback: Partial<IFeedBack>): Observable<IFeedBack> {
    return this.http.put<IFeedBack>(this.api, feedback).pipe(
      tap(() => {this.selectedFeedBack.set({...this.selectedFeedBack(), ...feedback})})
    );
  }

  // adds a comment to the feedback and updates the feedbacks signal
  addComment(feedback: IFeedBack, user: IUser, content: string) {
    const comments = feedback.comments ?? [];
    const commentId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
    const commentData = { id: commentId, user, content };

    const updatedFeedback = {
      ...feedback,
      comments: [...comments, commentData]
    };
    return this.updateFeedBack(updatedFeedback);
  }

  addReplyToComment(feedBack: IFeedBack, replyData: IReplyInit, currentUser: IUser) {
    const commentsCopy = [...feedBack.comments ?? []];
    const targetComment = commentsCopy.find(comment => comment.id === replyData.commentId);
    
    const newReply = {
      content: replyData.content, 
      replyingTo: replyData.replyingTo,
      user: currentUser
    };

    const updatedFeedback: IFeedBack = {
      ...feedBack,
      comments: commentsCopy.map(comment => 
        comment.id === replyData.commentId 
          ? { ...comment, replies: [...(comment.replies || []), newReply] }
          : comment
      )
    }
    return this.updateFeedBack(updatedFeedback);
  }

  saveFeedback(feedback: Partial<IFeedBack>, isUpdate: boolean) {
  return isUpdate
    ? this.updateFeedBack(feedback)
    : this.addFeedBack(feedback);
}

  upVoteFeedBack(upvotedFeedback: IFeedBack) {
    this.isUpVotingFeedback.set(true);
    this.http.put<IFeedBack>(this.api, upvotedFeedback).pipe(
      tap(() => {
        this.feedBacks.update(list =>
            list.map(fb => (fb.id === upvotedFeedback.id ? upvotedFeedback : fb))
          );
          this.selectedFeedBack.set(upvotedFeedback);
      }),
      finalize(() => this.isUpVotingFeedback.set(false)),
    ).subscribe();
  }
  


  // Deletes a feedback from the API and updates the feedbacks signal
  deleteFeedBack(id: number): Observable<IFeedBack> {
    return this.http.delete<IFeedBack>(`${this.api}/${id}`)
  }
  

  
  
  // Filter Setter
  setCategoryTerm(category: string) {
    this.categoryTerm.set(category);
  }
  


  // Sort Setter
  setSortValue(value: string) {
    this.sortValue.set(value);
  }


  // Private methods
  private sortFeedBacks(type: string, list: IFeedBack[]): IFeedBack[] {
    const getCommentCount = (fb: IFeedBack) =>
      fb.comments?.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0) || 0;

      switch (type) {
        case 'Most Upvotes':
          return [...list].sort((a, b) => b.upvotes - a.upvotes);
        case 'Least Upvotes':
          return [...list].sort((a, b) => a.upvotes - b.upvotes);
        case 'Most Comments':
          return [...list].sort((a, b) => getCommentCount(b) - getCommentCount(a));
        case 'Least Comments':
          return [...list].sort((a, b) => getCommentCount(a) - getCommentCount(b));
        default:
            
          return list;
      }
  }


  
}



