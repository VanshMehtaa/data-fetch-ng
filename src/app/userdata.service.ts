import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('https://reqres.in/api/users');
  }

  postData(name:string, job:string){
    return this.http.post('https://reqres.in/api/users', {name,job});
  }
}
