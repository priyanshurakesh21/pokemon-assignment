import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DataService } from '../services/data.service';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    DatepickerComponent,
  ],
  entryComponents: [DatepickerComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
