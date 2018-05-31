import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../comment/comment.model';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { FilterCommentsAction } from '../comment.actions';
import { ChangeDetectionLogComponent } from '../changed-detection-log.component';

@Component({
  selector: 'eml-comment-search-input',
  templateUrl: './comment-search-input.component.html',
  styleUrls: ['./comment-search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSearchInputComponent extends ChangeDetectionLogComponent {
  author: string = null;
  text: string = null;

  constructor(private store: Store<AppState>) {
    super('CommentSearchInputComponent');
  }

  onKeyUp() {
    this.store.dispatch(new FilterCommentsAction({ author: this.author, text: this.text}));
  }
}
