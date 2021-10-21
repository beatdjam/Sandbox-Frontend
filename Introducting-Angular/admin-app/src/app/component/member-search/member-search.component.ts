import { Component, OnInit } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Member} from "../../model/member";
import {MemberService} from "../../service/member.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {
  members$: Observable<Member[]> = of([]);
  private searchTerms = new Subject<string>()

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.memberService.searchMembers(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
