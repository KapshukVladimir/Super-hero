import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alphabetical-item',
  templateUrl: './alphabetical-item.component.html',
  styleUrls: ['./alphabetical-item.component.scss']
})
export class AlphabeticalItemComponent implements OnInit {
  @Input() item: string;
  @Output() newLetter = new EventEmitter<string>();

  ngOnInit(): void {
  }

  chooseLetter(): void {
    this.newLetter.emit(this.item);
  }
}
