import { Injectable } from '@angular/core';
import { AngularFireAuth}  from "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  create(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
