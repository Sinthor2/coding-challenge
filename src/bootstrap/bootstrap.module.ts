import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BootstrapComponent } from './bootstrap.component';
import { BootstrapRoutingModule } from './bootstrap.routing';
import { AuthGuard } from './guards/auth.guard';


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
  providers: [
    AuthGuard
  ],
  bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }
