import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  BASE_URI:string='http://localhost:4000';

  constructor(private http: HttpClient) { }

  checkUser(userCredentials:{username:string, password: string}){
    return this.http.post(`${this.BASE_URI}/getUser`,userCredentials)
  }

  getProduct(){
    return this.http.get(`${this.BASE_URI}/getProduct`);
  }

}
