import { Component, EventEmitter, Output } from '@angular/core';
import { StaticArrayAlphabetical} from './staticArrayAlphabetical';

@Component({
  selector: 'app-alphabetical-select',
  templateUrl: './alphabetical-select.component.html',
  styleUrls: ['./alphabetical-select.component.scss']
})
export class AlphabeticalSelectComponent {
  @Output() newLetter: EventEmitter<string> = new EventEmitter<string>();
  alphabetical: string[] = [];
  showAlphabetical = false;
  item = 'a';

  toggleLetter(): void {
    this.alphabetical = StaticArrayAlphabetical.getAlphabet();
    this.showAlphabetical = !this.showAlphabetical;
  }

  changeLetter(event: string): void {
    this.item = event;
    this.showAlphabetical = false;
    this.newLetter.emit(this.item);
  }
}
