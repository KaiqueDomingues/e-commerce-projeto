import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("https://api.fabrizioborelli.com.br/ecommerce/produtos/");
  }

  deletar(id : number){
    return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${id}`)
  }

  save(body: any){
    return this.http.post("https://api.fabrizioborelli.com.br/ecommerce/produtos",body)
  }

  update (id: number, body: any){
    return this.http.patch(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${id}`, body);
  }

  getOne(id: number){
    return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${id}`)
  }

  getCategorias(){
    return this.http.get('https://api.fabrizioborelli.com.br/ecommerce/categorias');
  }

  getUsuarios(){
    return this.http.get("https://api.fabrizioborelli.com.br/ecommerce/usuarios");
  }
  getEndereco(){
    return this.http.get( 'https://api.fabrizioborelli.com.br/ecommerce/enderecos/')
  }

}
