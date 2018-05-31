import { OnChanges, SimpleChanges } from '@angular/core';

export class ChangeDetectionLogComponent implements OnChanges {
  constructor(private name: string) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Component ${this.name} changed`, changes);
  }
}
