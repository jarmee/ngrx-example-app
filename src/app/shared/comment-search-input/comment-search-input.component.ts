import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { FilterCommentsAction } from '../comment.actions';

@Component({
  selector: 'eml-comment-search-input',
  templateUrl: './comment-search-input.component.html',
  styleUrls: ['./comment-search-input.component.css']
})
export class CommentSearchInputComponent {
  author: string = null;
  text: string = null;

  constructor(private store: Store<AppState>) {}

  onKeyUp() {
    this.store.dispatch(new FilterCommentsAction({ author: this.author, text: this.text}));
  }
}
