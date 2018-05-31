import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from './comment.model';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { DeleteCommentAction } from '../comment.actions';
@Component({
  selector: 'eml-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent  {
  @Input()
  comment: Comment;

  constructor(private store: Store<AppState>) {}

  onClick() {
    this.store.dispatch(new DeleteCommentAction(this.comment));
  }
}
