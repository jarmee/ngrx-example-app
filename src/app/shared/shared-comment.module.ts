import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { CommentCounterComponent } from './comment-counter/comment-counter.component';
import { CommentSearchInputComponent } from './comment-search-input/comment-search-input.component';
import { CommentSearchResultComponent } from './comment-search-result/comment-search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CommentComponent,
    CommentListComponent,
    CommentInputComponent,
    CommentCounterComponent,
    CommentSearchInputComponent,
    CommentSearchResultComponent
  ],
  exports: [
    CommentListComponent,
    CommentInputComponent,
    CommentCounterComponent,
    CommentSearchInputComponent,
    CommentSearchResultComponent
  ]
})
export class SharedCommentModule { }
