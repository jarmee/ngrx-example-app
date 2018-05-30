import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'eml-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {
  @Input()
  comment: Comment;
}
