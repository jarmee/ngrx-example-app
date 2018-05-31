import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eml-comment-counter',
  templateUrl: './comment-counter.component.html',
  styleUrls: ['./comment-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCounterComponent {
  @Input()
  count: number;
}
