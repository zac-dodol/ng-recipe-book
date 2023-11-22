import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.scss'],
})
export class MockDataComponent {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const apiUrl = 'https://dummyjson.com/todos?limit=10&skip=80';
    this.data = await this.dataService.fetchData(apiUrl);
    console.log(this.data); // Optional: log the data to the console
  }
}
