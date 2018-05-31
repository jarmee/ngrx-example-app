import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectionLogComponent } from '../changed-detection-log.component';

@Component({
  selector: 'eml-comment-counter',
  templateUrl: './comment-counter.component.html',
  styleUrls: ['./comment-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCounterComponent extends ChangeDetectionLogComponent {
  @Input()
  count: number;

  constructor() {
    super('CommentCounterComponent');
  }
}
