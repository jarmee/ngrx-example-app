import { Component, Input } from '@angular/core';

@Component({
  selector: 'eml-comment-counter',
  templateUrl: './comment-counter.component.html',
  styleUrls: ['./comment-counter.component.css']
})
export class CommentCounterComponent {
  @Input()
  count: number;
}
