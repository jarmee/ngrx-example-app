import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'eml-comment-search-input',
  templateUrl: './comment-search-input.component.html',
  styleUrls: ['./comment-search-input.component.css']
})
export class CommentSearchInputComponent {
  author: string = null;
  text: string = null;

  @Output()
  searchComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  onKeyUp() {
    this.searchComment.emit({ author: this.author, text: this.text});
  }
}
