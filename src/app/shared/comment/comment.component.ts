import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from './comment.model';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { DeleteCommentAction } from '../comment.actions';
import { ChangeDetectionLogComponent } from '../changed-detection-log.component';
@Component({
  selector: 'eml-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent extends ChangeDetectionLogComponent  {
  @Input()
  comment: Comment;

  constructor(private store: Store<AppState>) {
    super('CommentComponent');
  }

  onClick() {
    this.store.dispatch(new DeleteCommentAction(this.comment));
  }
}
