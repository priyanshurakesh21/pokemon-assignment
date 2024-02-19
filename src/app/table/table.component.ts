import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from '../../services/data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() tableData;
  displayedColumns = ['position', 'name'];
  dataSource = new MatTableDataSource<Result[]>();
  showTable: boolean = false;

  constructor() {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
