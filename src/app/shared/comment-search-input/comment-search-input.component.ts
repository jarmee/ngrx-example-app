import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';
import { ChangeDetectionLogComponent } from '../change-detection-log.component';

@Component({
  selector: 'eml-comment-search-input',
  templateUrl: './comment-search-input.component.html',
  styleUrls: ['./comment-search-input.component.css']
})
export class CommentSearchInputComponent extends ChangeDetectionLogComponent {
  author: string = null;

  text: string = null;

  @Output()
  searchComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() {
    super('CommentSearchInputComponent');
  }

  onKeyUp() {
    this.searchComment.emit({ author: this.author, text: this.text});
  }
}
