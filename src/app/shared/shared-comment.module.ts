import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommentCounterComponent } from './comment-counter/comment-counter.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentSearchInputComponent } from './comment-search-input/comment-search-input.component';
import { CommentSearchResultComponent } from './comment-search-result/comment-search-result.component';
import { CommentComponent } from './comment/comment.component';
import { reducers, initialState } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule
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
