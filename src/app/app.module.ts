import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentComponent } from './shared/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/reducers';
import { CommentListComponent } from './shared/comment-list/comment-list.component';
import { SharedCommentModule } from './shared/shared-comment.module';
import { CommentSectionModule } from './comment-section/comment-section.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommentSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
