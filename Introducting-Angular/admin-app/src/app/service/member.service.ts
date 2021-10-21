import {Injectable} from '@angular/core';
import {Member} from "../model/member";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class MemberService {
  private membersUrl = 'api/members';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private messageService: MessageService, private httpService: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    return this.httpService.get<Member[]>(this.membersUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log('社員データを取得しました')),
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  getMember(id: number): Observable<Member | undefined> {
    const url = `${this.membersUrl}/${id}`;
    return this.httpService.get<Member>(url).pipe(
      tap(_ => this.log('社員データを取得しました')),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  updateMember(member: Member | undefined): Observable<any> {
    return this.httpService.put<Member>(this.membersUrl, member, this.httpOptions)
      .pipe(
        tap(_ => this.log('社員データを変更しました')),
        catchError(this.handleError<any>(`updateMember`))
      );
  }

  addMember(member: Member): Observable<Member> {
    return this.httpService.post<Member>(this.membersUrl, member, this.httpOptions)
      .pipe(
        tap(_ => this.log('社員データを追加しました')),
        catchError(this.handleError<any>(`addMember`))
      );
  }

  deleteMember(id: number): Observable<any> {
    const url = `${this.membersUrl}/${id}`;
    return this.httpService.delete<Member>(url, this.httpOptions).pipe(
      tap(_ => this.log('社員データを削除しました')),
      catchError(this.handleError<Member>(`deleteMember id=${id}`))
    );
  }

  searchMembers(term: string): Observable<Member[]> {
    if (!term.trim()) return of([]);
    return this.httpService.get<Member[]>(`${this.membersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`社員${term}を検索`)),
      catchError(this.handleError<Member[]>(`searchMembers term=${term}`, []))
    );
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} 失敗: ${error.message}`);
      return of(result as T)
    }
  }
}
