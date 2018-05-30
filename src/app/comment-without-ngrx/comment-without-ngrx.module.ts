import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentWithoutNgrxComponent } from './comment-without-ngrx.component';
import { SharedCommentModule } from '../shared/shared-comment.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule
  ],
  declarations: [
    CommentWithoutNgrxComponent
  ],
  exports: [
    CommentWithoutNgrxComponent
  ]
})
export class CommentWithoutNgrxModule { }
