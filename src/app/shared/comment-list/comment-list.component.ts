import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionLogComponent } from '../change-detection-log.component';

@Component({
  selector: 'eml-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent extends ChangeDetectionLogComponent {
  @Input()
  comments: Comment[];

  @Output()
  deleted: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() {
    super('CommentListComponent');
  }

  onCommentDeleted(comment: Comment) {
    this.deleted.emit(comment);
  }
}
