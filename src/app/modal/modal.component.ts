import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() opened = false;
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    console.log(1);
    this.opened = false;
    this.openedChange.emit(false);
  }
}
