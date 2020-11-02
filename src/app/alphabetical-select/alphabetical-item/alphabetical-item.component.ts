import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alphabetical-item',
  templateUrl: './alphabetical-item.component.html',
  styleUrls: ['./alphabetical-item.component.scss']
})
export class AlphabeticalItemComponent {
  @Input() item: string;
  @Output() newLetter = new EventEmitter<string>();

  chooseLetter(): void {
    this.newLetter.emit(this.item);
  }
}
