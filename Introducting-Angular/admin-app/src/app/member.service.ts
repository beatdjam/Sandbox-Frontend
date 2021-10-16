import {Injectable} from '@angular/core';
import {Member} from "./member";
import {MEMBERS} from "./mock-members";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class MemberService {
  private membersUrl = 'api/members';

  constructor(private messageService: MessageService, private httpService: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    this.log(`社員一覧を取得`);
    return this.httpService.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member | undefined> {
    this.log(`社員${id}を取得`);
    return of(MEMBERS.find(member => member.id === id));
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }
}
