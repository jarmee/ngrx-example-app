import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../comment/comment.model';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { DeleteCommentAction } from '../comment.actions';
import { ChangeDetectionLogComponent } from '../changed-detection-log.component';

@Component({
  selector: 'eml-comment-search-result',
  templateUrl: './comment-search-result.component.html',
  styleUrls: ['./comment-search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSearchResultComponent extends ChangeDetectionLogComponent {
  @Input()
  comments: Comment[] = [];

  constructor(private store: Store<AppState>) {
    super('CommentSearchResultComponent');
  }

  onCommentDeleted(comment: Comment) {
    this.store.dispatch(new DeleteCommentAction(comment));
  }
}
