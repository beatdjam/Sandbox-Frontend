import {Injectable} from '@angular/core';
import {Member} from "./member";
import {MEMBERS} from "./mock-members";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({providedIn: 'root'})
export class MemberService {

  constructor(private messageService: MessageService) {
  }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧を取得');
    return of(MEMBERS);
  }

  getMember(id: number): Observable<Member | undefined> {
    this.messageService.add(`MemberService: 社員${id}を取得`);
    return of(MEMBERS.find(member => member.id === id));
  }
}
