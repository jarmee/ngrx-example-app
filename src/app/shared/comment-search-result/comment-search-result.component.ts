import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'eml-comment-search-result',
  templateUrl: './comment-search-result.component.html',
  styleUrls: ['./comment-search-result.component.css']
})
export class CommentSearchResultComponent {
  commentList: Comment[] = [];

  @Input()
  set comments(comments: Comment[]) {
    this.commentList = comments;
  }

  get comments(): Comment[] {
    return this.commentList.reverse().slice(0, 3);
  }
}
