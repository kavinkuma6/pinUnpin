import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinUnpinModule } from './shared/pin-unpin/pin-unpin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PinUnpinModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
