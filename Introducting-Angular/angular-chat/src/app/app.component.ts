import {Component} from '@angular/core';
import {Comment} from "./class/comment";
import {User} from "./class/user";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";


const CURRENT_USER = new User(1, 'test1');
const ANOTHER_USER = new User(2, 'test2');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'message1'),
  new Comment(ANOTHER_USER, 'message2'),
  new Comment(CURRENT_USER, 'message3'),
  new Comment(CURRENT_USER, 'message4'),
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
  }


  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
