import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eml-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent {
  @Input()
  comments: Comment[];
}
