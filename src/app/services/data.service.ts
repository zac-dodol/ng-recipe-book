import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  async fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  async postData(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  async deleteData(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   constructor(private httpClient: HttpClient) {}

//   fetchData(url: string): Observable<any> {
//     return this.httpClient.get(url);
//   }

//   postData(url: string, data: any): Observable<any> {
//     return this.httpClient.post(url, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }

//   deleteData(url: string): Observable<any> {
//     return this.httpClient.delete(url, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }

// appModule
// import { HttpClientModule } from '@angular/common/http';
// @NgModule({
//   imports: [HttpClientModule],
//   // ...
// })
// export class YourModule {}

// basic JS fetchdata function
// async function fetchData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// let data;
// fetchData("https://dummyjson.com/todos?limit=10&skip=80").then((res) => {
//   data = res;
// });
