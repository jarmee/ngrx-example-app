import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectionLogComponent } from '../changed-detection-log.component';

@Component({
  selector: 'eml-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent extends ChangeDetectionLogComponent {
  @Input()
  comments: Comment[];

  constructor() {
    super('CommentListComponent');
  }
}
