import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';
import { UsersStoreService } from '../stores/users-store.service';
import { UserModel } from 'src/app/user/models/user.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private usersStore: UsersStoreService, private localStorageService: LocalStorageService) { }

  authenticate(userCredentials: UserCredentials) {
    const status = this.usersStore.check(userCredentials);
    if (status) {
      this.localStorageService.create('user-logged', true);
    }
    return status;
  }

  isUserLogged(): boolean {
    return this.localStorageService.read('user-logged');
  }
  destroySession(): any {
   return this.localStorageService.delete('user-logged');
  }

  register(userModel: UserModel) {

  }
}
