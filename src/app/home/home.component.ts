import { Component } from '@angular/core';
import { Result } from '../../services/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tableData: Result[];
  tableVisible = false;

  constructor(readonly dataService: DataService) {}

  getDay(value: string) {
    this.dataService.getPokemonSubject().subscribe((data) => {
      this.tableData = data;
    });
    this.dataService.fetchData(value);
    this.tableVisible = true;
  }

  closeTable() {
    this.tableVisible = false;
    this.dataService.pokemonSubject.next(null);
  }
}
