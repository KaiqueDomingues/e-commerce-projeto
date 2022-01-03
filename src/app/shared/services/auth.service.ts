import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi = `https://api.fabrizioborelli.com.br/ecommerce/usuarios`
  constructor(private http: HttpClient) { }

  autenticar(email: string, senha: string){
    let authModel : AuthModel = {
      email: email,
      senha: senha
    }
    return this.http.post(this.urlApi, authModel)
  }

  isAutenticado(): boolean{
    let isAutenticado = localStorage.getItem('autenticado');

    return isAutenticado == 'true'? true:false;
  }
}
