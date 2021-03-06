import {Component, OnInit} from '@angular/core';
import {Member} from "../../model/member";
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.memberService.addMember({name} as Member)
      .subscribe(member => this.members.push(member));
  }

  delete(member: Member): void {
    this.memberService.deleteMember(member.id)
      .subscribe(_ => this.members = this.members.filter(mem => mem.id !== member.id));
  }

}
