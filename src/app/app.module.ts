import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ClipboardService } from './services/clipboard.service';
import { ClipboardDirective } from './directives/clipboard.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ClipboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
