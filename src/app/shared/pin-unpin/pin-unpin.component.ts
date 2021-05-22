import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-unpin',
  templateUrl: './pin-unpin.component.html',
  styleUrls: ['./pin-unpin.component.scss'],
})
export class PinUnpinComponent implements OnInit {
  @Input() height: string = '';
  @Input() width: string = '';
  dragDisabled = false;
  constructor() {}
  ngOnInit(): void {}
}
