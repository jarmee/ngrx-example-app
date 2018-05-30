import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'eml-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {
  @Input()
  comment: Comment;

  @Output()
  deleted: EventEmitter<Comment> = new EventEmitter<Comment>();

  onClick() {
    this.deleted.emit(this.comment);
  }
}
