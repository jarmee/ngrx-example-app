import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'eml-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  text: string;

  @Output()
  commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();

  onSubmit() {
    this.commentCreated.emit({author: 'Jari Möllenbernd', text: this.text});
    this.text = null;
  }
}
