import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MembersComponent} from "./component/members/members.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {MemberDetailComponent} from "./component/member-detail/member-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'members', component: MembersComponent},
  {path: 'detail/:id', component: MemberDetailComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
