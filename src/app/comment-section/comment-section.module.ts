import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './comment-section.component';
import { SharedCommentModule } from '../shared/shared-comment.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule
  ],
  declarations: [
    CommentSectionComponent
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentSectionModule { }
