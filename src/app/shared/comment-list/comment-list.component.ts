import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eml-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input()
  comments: Comment[];
}
