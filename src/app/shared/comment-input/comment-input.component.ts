import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'eml-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  editAuthor: boolean;
  author = 'jarmee';

  text: string;

  @Output()
  commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();

  onSubmit() {
    if (this.text && this.text.length > 0) {
      this.commentCreated.emit({author: this.author, text: this.text});
      this.text = null;
      this.editAuthor = false;
    }
  }
}
