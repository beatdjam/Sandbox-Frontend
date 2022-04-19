import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListFilterComponent } from './user-list-filter/user-list-filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { ExplicitSubscribeComponent } from './explicit-subscribe/explicit-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
    ExplicitSubscribeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
