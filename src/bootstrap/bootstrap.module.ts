import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BootstrapComponent } from './bootstrap.component';
import { BootstrapRoutingModule } from './bootstrap.routing';


@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }
