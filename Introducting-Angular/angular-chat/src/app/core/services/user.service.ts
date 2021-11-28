import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {User} from "../../class/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
  }

  create(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        const {user} = credential;
        const actionCodeSettings = {url: `http://localhost:4200/?newAccount=true&user=${user.uid}`}
        credential.user.sendEmailVerification(actionCodeSettings)
          .then(() => this.db.object(`/users/${user.uid}`).set({ uid: user.uid, email: user.email }));
      });
  }

  update(values: { displayName?: string, photoURL?: string }): Promise<void> {
    return this.afAuth.currentUser.then(user => {
      if (user) {
        user.updateProfile(values)
          .then(() => this.db.object(`/users/${user.uid}`).update(values))
          .catch(error => console.error(error));
      }
    });
  }
}
