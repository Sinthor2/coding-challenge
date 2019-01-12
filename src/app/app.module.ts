import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
  ]
})
export class AppModule { }
