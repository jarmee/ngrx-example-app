import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './comment.model';
import { ChangeDetectionLogComponent } from '../change-detection-log.component';

@Component({
  selector: 'eml-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent extends ChangeDetectionLogComponent  {
  @Input()
  comment: Comment;

  @Output()
  deleted: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() {
    super('CommentComponent');
  }

  onClick() {
    this.deleted.emit(this.comment);
  }
}
