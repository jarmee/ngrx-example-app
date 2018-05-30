import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './comment-section.component';
import { SharedCommentModule } from '../shared/shared-comment.module';
import { StoreModule } from '@ngrx/store';
import { initialState } from '../shared/comment.reducer';
import { reducers } from '../shared/reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule,
    StoreModule
  ],
  declarations: [
    CommentSectionComponent
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentSectionModule { }
