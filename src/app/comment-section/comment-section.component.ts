import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment/comment.model';
import { fakeComments } from '../test/data/comment';
import { AppState } from '../shared/reducers';
import { Store } from '@ngrx/store';
import { getAll, getCount, getFiltered, getFilteredCount } from '../shared/comment.selector';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'eml-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent {
  comments$: Observable<Comment[]>;
  count$: Observable<number>;
  filteredCount$: Observable<number>;
  filteredComments$: Observable<Comment[]>;

  constructor(private store: Store<AppState>) {
    this.comments$ = this.store.select(getAll());
    this.count$ = this.store.select(getCount());
    this.filteredComments$ = this.store.select(getFiltered());
    this.filteredCount$ = this.store.select(getFilteredCount());
  }
}
