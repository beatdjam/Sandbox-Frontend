import { Component } from '@angular/core';
import * as http from 'http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PrefectureRepository } from './repository/prefecture.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yumemi-exam-angular';
  apiKey = '';

  constructor(private repository: PrefectureRepository) {}

  changeKey($event: string) {
    this.apiKey = $event;
    this.repository
      .getAllPrefectures(this.apiKey)
      .subscribe((resp) => console.log(resp));
  }
}
