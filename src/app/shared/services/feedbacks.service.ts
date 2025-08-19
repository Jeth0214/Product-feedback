import { computed, DestroyRef, inject, Injectable, signal } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, finalize, Observable, tap } from 'rxjs';
import { IFeedBack } from "../models/feedbacks.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IUser } from "../models/user.model";
import { IReplyInit } from "../models/replies.model";
import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root',
})


export class FeedBackService  {

  //core
  private readonly api: string = 'api/feedBacks';
  
  // Dependencies
  private readonly http = inject(HttpClient);
  private destroy$ = inject(DestroyRef);
  private readonly toastrService = inject(ToastrService);
  private readonly router = inject(Router);

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
    this.feedBacks.set(FEEDBACKS);
    // this.http.get<IFeedBack[]>(this.api)
    //   .pipe(
    //     tap((response) => this.feedBacks.set(response)),
    //     finalize(() => this.isFetchingFeedBacks.set(false)),
    //     catchError((error: HttpErrorResponse) => {
    //       this.toastrService.error('Error Fetching Feedbacks', `Status: ${error.status}`);
    //       return [];
    //     }),
    //     takeUntilDestroyed(this.destroy$)
    //   ).subscribe();
    
  }

// Fetches a specific feedback by its ID from the API
  getFeedBackById(id: number) {
    this.isFetchingSelectedFeedBack.set(true);
    this.http.get<IFeedBack>(`${this.api}/${id}`).pipe(
      tap(( response ) => this.selectedFeedBack.set(response)),
      finalize(() => this.isFetchingSelectedFeedBack.set(false)),
      catchError(
        (error: HttpErrorResponse) => {
          this.toastrService.error('Error Fetching Feedback', `Status: ${error.status}`);
          this.router.navigate(['/']);
          return [];
        }
      ),
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

  saveFeedBack(feedback: Partial<IFeedBack>, isUpdate: boolean) {
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
        this.toastrService.success('Feedback upvoted successfully', 'Success');
      }),
      finalize(() => this.isUpVotingFeedback.set(false)),
      catchError((error: HttpErrorResponse) => {
        this.toastrService.error('Failed to upvote feedback', `Status: ${error.status}`);
        return [];
      }),
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

const FEEDBACKS: IFeedBack[] = [
    {
      "id": 1,
      "title": "Add tags for solutions",
      "category": "enhancement",
      "upvotes": 112,
      "status": "suggestion",
      "description": "Easier to search for solutions based on a specific stack.",
      "comments": [
        {
          "id": 1,
          "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
          "user": {
            "image": "./assets/user-images/image-suzanne.jpg",
            "name": "Suzanne Chang",
            "username": "upbeat1811"
          }
        },
        {
          "id": 2,
          "content": "Please use fun, color-coded labels to easily identify them at a glance",
          "user": {
            "image": "./assets/user-images/image-thomas.jpg",
            "name": "Thomas Hood",
            "username": "brawnybrave"
          }
        }
      ]
    },
    {
      "id": 2,
      "title": "Add a dark theme option",
      "category": "feature",
      "upvotes": 99,
      "status": "suggestion",
      "description": "It would help people with light sensitivities and who prefer dark mode.",
      "comments": [
        {
          "id": 3,
          "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
          "user": {
            "image": "./assets/user-images/image-elijah.jpg",
            "name": "Elijah Moss",
            "username": "hexagon.bestagon"
          }
        },
        {
          "id": 4,
          "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
          "user": {
            "image": "./assets/user-images/image-james.jpg",
            "name": "James Skinner",
            "username": "hummingbird1"
          },
          "replies": [
            {
              "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
              "replyingTo": "hummingbird1",
              "user": {
                "image": "./assets/user-images/image-anne.jpg",
                "name": "Anne Valentine",
                "username": "annev1990"
              }
            },
            {
              "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
              "replyingTo": "annev1990",
              "user": {
                "image": "./assets/user-images/image-ryan.jpg",
                "name": "Ryan Welles",
                "username": "voyager.344"
              }
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Q&A within the challenge hubs",
      "category": "feature",
      "upvotes": 65,
      "status": "suggestion",
      "description": "Challenge-specific Q&A would make for easy reference.",
      "comments": [
        {
          "id": 5,
          "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
          "user": {
            "image": "./assets/user-images/image-george.jpg",
            "name": "George Partridge",
            "username": "soccerviewer8"
          }
        }
      ]
    },
    {
      "id": 4,
      "title": "Add image/video upload to feedback",
      "category": "enhancement",
      "upvotes": 51,
      "status": "suggestion",
      "description": "Images and screencasts can enhance comments on solutions.",
      "comments": [
        { 
          "id": 6,
          "content": "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
          "user": {
            "image": "./assets/user-images/image-javier.jpg",
            "name": "Javier Pollard",
            "username": "warlikeduke"
          }
        },
        {
          "id": 7,
          "content": "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
          "user": {
            "image": "./assets/user-images/image-roxanne.jpg",
            "name": "Roxanne Travis",
            "username": "peppersprime32"
          }
        }
      ]
    },
    {
      "id": 5,
      "title": "Ability to follow others",
      "category": "feature",
      "upvotes": 42,
      "status": "suggestion",
      "description": "Stay updated on comments and solutions other people post.",
      "comments": [
        {
          "id": 8,
          "content": "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
          "user": {
            "image": "./assets/user-images/image-victoria.jpg",
            "name": "Victoria Mejia",
            "username": "arlen_the_marlin"
          },
          "replies": [
            {
              "content": "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
              "replyingTo": "arlen_the_marlin",
              "user": {
                "image": "./assets/user-images/image-zena.jpg",
                "name": "Zena Kelley",
                "username": "velvetround"
              }
            }
          ]
        },
        {
          "id": 9,
          "content": "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
          "user": {
            "image": "./assets/user-images/image-jackson.jpg",
            "name": "Jackson Barker",
            "username": "countryspirit"
          }
        }
      ]
    },
    {
      "id": 6,
      "title": "Preview images not loading",
      "category": "bug",
      "upvotes": 3,
      "status": "suggestion",
      "description": "Challenge preview images are missing when you apply a filter."
    },
    {
      "id": 7,
      "title": "More comprehensive reports",
      "category": "feature",
      "upvotes": 123,
      "status": "planned",
      "description": "It would be great to see a more detailed breakdown of solutions.",
      "comments": [
        {
          "id": 10,
          "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
          "user": {
            "image": "./assets/user-images/image-victoria.jpg",
            "name": "Victoria Mejia",
            "username": "arlen_the_marlin"
          }
        },
        {
          "id": 11,
          "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
          "user": {
            "image": "./assets/user-images/image-jackson.jpg",
            "name": "Jackson Barker",
            "username": "countryspirit"
          }
        }
      ]
    },
    {
      "id": 8,
      "title": "Learning paths",
      "category": "feature",
      "upvotes": 28,
      "status": "planned",
      "description": "Sequenced projects for different goals to help people improve.",
      "comments": [
        {
          "id": 12,
          "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
          "user": {
            "image": "./assets/user-images/image-george.jpg",
            "name": "George Partridge",
            "username": "soccerviewer8"
          }
        }
      ]
    },
    {
      "id": 9,
      "title": "One-click portfolio generation",
      "category": "feature",
      "upvotes": 62,
      "status": "in-progress",
      "description": "Add ability to create professional looking portfolio from profile.",
      "comments": [
        {
          "id": 13,
          "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
          "user": {
            "image": "./assets/user-images/image-ryan.jpg",
            "name": "Ryan Welles",
            "username": "voyager.344"
          }
        }
      ]
    },
    {
      "id": 10,
      "title": "Bookmark challenges",
      "category": "feature",
      "upvotes": 31,
      "status": "in-progress",
      "description": "Be able to bookmark challenges to take later on.",
      "comments": [
        {
          "id": 14,
          "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
          "user": {
            "image": "./assets/user-images/image-suzanne.jpg",
            "name": "Suzanne Chang",
            "username": "upbeat1811"
          }
        }
      ]
    },
    {
      "id": 11,
      "title": "Animated solution screenshots",
      "category": "bug",
      "upvotes": 9,
      "status": "in-progress",
      "description": "Screenshots of solutions with animations don’t display correctly."
    },
    {
      "id": 12,
      "title": "Add micro-interactions",
      "category": "enhancement",
      "upvotes": 71,
      "status": "live",
      "description": "Small animations at specific points can add delight.",
      "comments": [
        {
          "id": 15,
          "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
          "user": {
            "image": "./assets/user-images/image-victoria.jpg",
            "name": "Victoria Mejia",
            "username": "arlen_the_marlin"
          },
          "replies": [
            {
              "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
              "replyingTo": "arlen_the_marlin",
              "user": {
                "image": "./assets/user-images/image-suzanne.jpg",
                "name": "Suzanne Chang",
                "username": "upbeat1811"
              }
            }
          ]
        }
      ]
    }
  ]



