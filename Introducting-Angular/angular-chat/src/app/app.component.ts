import {Component} from '@angular/core';
import {Comment} from "./class/comment";
import {User} from "./class/user";
import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";


const CURRENT_USER = new User(1, 'test1');
// const ANOTHER_USER = new User(2, 'test2');

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  input = '';

  constructor(private db: AngularFireDatabase) {
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.valueChanges();
  }


  addComment(comment: string): void {
    if (comment) {
      this.commentsRef.push(new Comment(this.currentUser, comment));
      this.input = '';
    }
  }
}
