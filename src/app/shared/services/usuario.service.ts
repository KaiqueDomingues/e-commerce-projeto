import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApi : string = `https://api.fabrizioborelli.com.br/ecommerce`

  constructor(private http:HttpClient) { 

  }

  novoUsuario(body:any){
    return this.http.post(`${this.urlApi}/usuarios`, body);
  }

  deletar(id : number){
    return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
  }


  update (id: number, body: any){
    return this.http.patch(`http://cursos.grandeporte.com.br:8080/usuarios/${id}`, body);
  }

  getOne(id: number){
    return this.http.get(`http://cursos.grandeporte.com.br:8080/usuarios/${id}`)
  }

  save(body: any){
    return this.http.post("https://api.fabrizioborelli.com.br/ecommerce/usuarios",body)
  }
  
}