import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.scss'],
})
export class MockDataComponent {
  data: any;

  fetchapiUrl = 'https://dummyjson.com/todos?limit=10&skip=80';
  postapiUrl = 'https://dummyjson.com/todos?limit=10&skip=80';
  deleteapiUrl = 'https://dummyjson.com/todos?limit=10&skip=80';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
    // this.postData();
    // this.deleteData();
  }

  async loadData() {
    this.data = await this.dataService.fetchData(this.fetchapiUrl);
  }

  async postData() {
    const todoData = {
      id: 0,
      todo: 'Complete Angular assignment',
      completed: false,
      userId: 1,
    };

    const result = await this.dataService.postData(this.postapiUrl, todoData);
    console.log('Data posted successfully:', result);
  }

  async deleteData() {
    const result = await this.dataService.deleteData(this.deleteapiUrl);
    console.log('Data deleted successfully:', result);
  }
}
