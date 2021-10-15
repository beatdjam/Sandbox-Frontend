import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../member";
import {ActivatedRoute} from "@angular/router";
import {MemberService} from "../member.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }
}
