import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../comment/comment.model';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { CreateCommentAction } from '../comment.actions';

@Component({
  selector: 'eml-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentInputComponent {
  editAuthor: boolean;
  author = 'jarmee';

  text: string;

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    if (this.text && this.text.length > 0) {
      this.store.dispatch(new CreateCommentAction({author: this.author, text: this.text}));
      this.editAuthor = false;
      this.text = null;
    }
  }
}
