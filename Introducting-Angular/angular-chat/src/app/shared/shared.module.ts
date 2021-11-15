import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CommentDatePipe} from "../pipes/comment-date.pipe";


@NgModule({
  declarations: [
    CommentDatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommentDatePipe,
    FormsModule,
  ]
})
export class SharedModule {
}
