import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eml-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input()
  comments: Comment[];

  @Output()
  deleted: EventEmitter<Comment> = new EventEmitter<Comment>();

  onCommentDeleted(comment: Comment) {
    this.deleted.emit(comment);
  }
}
