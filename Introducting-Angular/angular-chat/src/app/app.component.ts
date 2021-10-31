import {Component} from '@angular/core';
import {Comment} from "./class/comment";

const COMMENTS: Comment[] = [
  {name: 'A', message: 'message1'},
  {name: 'A', message: 'message2'},
  {name: 'B', message: 'message3'},
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
