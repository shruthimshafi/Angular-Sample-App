import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class MyDataService {

  data2: any = [];
  constructor(private http: Http) {}

  // PostData(data2) {
  //   // return this.http.get('http://127.0.0.1:8000/books/').map(
  //     return this.http.post('http://127.0.0.1:8000/bookapi/', this.data2).map(
  //       (response) => response.json()
  //     ).subscribe(
  //     );
  //   }

       PostData(data2) {
        // data2.gender =  ( data2.gender === 'female' ) ? 0 : 1;
      // return this.http.get('http://127.0.0.1:8000/books/').map(
        return this.http.post('http://127.0.0.1:8000/bookapi/', this.data2).map(
          (response) => response.json()
        ).subscribe(
          (data2) => console.log(data2)
        );
      }
}

