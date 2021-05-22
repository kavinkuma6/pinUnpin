import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinUnpinComponent } from './pin-unpin.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PinUnpinComponent],
  imports: [CommonModule, DragDropModule],
  exports: [PinUnpinComponent],
})
export class PinUnpinModule {}
