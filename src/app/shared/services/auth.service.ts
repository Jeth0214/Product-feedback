import { Injectable, signal } from '@angular/core';
import { IUser } from '../models/user.model';

const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSignal = signal<IUser | null>(null);

  user = this.userSignal.asReadonly();

  constructor() {
    this.loadUserFromStorage();
  }

  // This app didn't have a login implementation, so we mock the user data
  // as if they were logged in.
  loadUserFromStorage() {
    const userFromStorage = localStorage.getItem(USER_STORAGE_KEY);
    if (userFromStorage) {
      const userData = JSON.parse(userFromStorage);
      this.userSignal.set(userData);
    }
    else {
      const temporaryUser: IUser = {
          image: "./assets/user-images/image-zena.jpg",
          name: "Zena Kelley",
          username: "velvetround",  
      }

      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(temporaryUser));
      this.userSignal.set(temporaryUser);
    }
 
  }
}
