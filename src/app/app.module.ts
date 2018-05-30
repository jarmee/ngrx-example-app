import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentComponent } from './shared/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/reducers';
import { CommentListComponent } from './shared/comment-list/comment-list.component';
import { SharedCommentModule } from './shared/shared-comment.module';
import { CommentWithoutNgrxModule } from './comment-without-ngrx/comment-without-ngrx.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommentWithoutNgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
