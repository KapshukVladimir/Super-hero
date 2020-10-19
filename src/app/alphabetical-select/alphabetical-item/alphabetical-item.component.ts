import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alphabetical-item',
  templateUrl: './alphabetical-item.component.html',
  styleUrls: ['./alphabetical-item.component.scss']
})
export class AlphabeticalItemComponent implements OnInit {
  @Input() item;
  @Output() newLetter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  chooseLetter(): void {
    this.newLetter.emit(this.item);
  }
}
