import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("https://api.fabrizioborelli.com.br/ecommerce/produtos");
  }
}
