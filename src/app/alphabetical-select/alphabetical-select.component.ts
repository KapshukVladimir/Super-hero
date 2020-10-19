import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alphabetical-select',
  templateUrl: './alphabetical-select.component.html',
  styleUrls: ['./alphabetical-select.component.scss']
})
export class AlphabeticalSelectComponent implements OnInit {
  alphabetical = [];
  showAlphabetical = false;
  item = 'a';
  @Output() newLetter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.alphabetical = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  chooseLetter(): void {
    this.showAlphabetical = !this.showAlphabetical;
  }

  changeLetter(event): void {
    this.item = event;
    this.showAlphabetical = false;
    this.newLetter.emit(this.item);
  }
}
