import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatTooltipModule, MatDividerModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [
    DataService,
  ]
})
export class AppModule { }
