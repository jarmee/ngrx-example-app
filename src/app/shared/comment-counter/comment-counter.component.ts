import { Component, Input } from '@angular/core';
import { ChangeDetectionLogComponent } from '../change-detection-log.component';

@Component({
  selector: 'eml-comment-counter',
  templateUrl: './comment-counter.component.html',
  styleUrls: ['./comment-counter.component.css']
})
export class CommentCounterComponent extends ChangeDetectionLogComponent {
  @Input()
  count: number;

  constructor() {
    super('CommentCounterComponent');
  }
}
