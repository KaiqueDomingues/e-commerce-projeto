import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarProdutosService {
  

  constructor(private http:HttpClient) { }

  listarProduto(){
    return this.http.get("https://api.fabrizioborelli.com.br/ecommerce/produtos");
  }

  getAll(){
    return this.http.get("https://api.fabrizioborelli.com.br/ecommerce/produtos");
  }

  getCategorias(){
    return this.http.get('https://api.fabrizioborelli.com.br/ecommerce/categorias');
  }

}
