import { Component, Input, OnChanges } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnChanges {
  @Output() newDateEvent = new EventEmitter<string>();
  @Input() resetDate: boolean;
  constructor() {}
  day: string = '';
  public date: Date;

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.day = event.value.getDate().toString();
  }

  getSelectedDate() {
    this.newDateEvent.emit(this.day);
  }

  ngOnChanges() {
    if (!this.resetDate) {
      this.date = null;
      this.day = '';
    }
  }
}
