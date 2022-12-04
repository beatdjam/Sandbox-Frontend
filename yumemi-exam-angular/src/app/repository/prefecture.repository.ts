import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

type Response = {
  result: [
    {
      prefCode: number;
      prefName: string;
    }
  ];
};

@Injectable({ providedIn: 'root' })
export class PrefectureRepository {
  constructor(private httpClient: HttpClient) {}

  getAllPrefectures(apiKey: string): Observable<Response> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      }),
    };
    return this.httpClient.get<Response>(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      httpOptions
    );
  }
}
