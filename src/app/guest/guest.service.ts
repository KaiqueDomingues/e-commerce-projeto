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

  buscaCep(cep:number){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  getOne(id: number){
    return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
  }

  update (id: number, body: any){
    return this.http.patch(`http://cursos.grandeporte.com.br:8080/usuarios/${id}`, body);
  }

  save(body: any){
    return this.http.post("https://api.fabrizioborelli.com.br/ecommerce/usuarios",body)
  }
  
  getCategorias(){
    return this.http.get('https://api.fabrizioborelli.com.br/ecommerce/categorias');
  }

  getImagens(){
    return this.http.get('https://api.fabrizioborelli.com.br/ecommerce/imagens');
  }

}
