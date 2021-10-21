import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MembersComponent} from './component/members/members.component';
import {FormsModule} from "@angular/forms";
import {MemberDetailComponent} from './component/member-detail/member-detail.component';
import {MessagesComponent} from './component/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from './service/in-memory-data.service';
import { MemberSearchComponent } from './component/member-search/member-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
