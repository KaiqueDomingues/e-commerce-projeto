import { Injectable } from '@angular/core';
import { ItemVendaModel } from '../models/item-venda.model';
import { produtoModel } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  CARRINHO_KEY = 'carrinho';

  //Responsável por gerenciar o carrinho na aplicação do Ecommerce

  constructor() { 


  }

  getCarrinho() : ItemVendaModel[]{
    let carrinho = localStorage.getItem(this.CARRINHO_KEY);

    if (carrinho != null){
      return JSON.parse(carrinho);
    }else{
      return [];
    }
  }


  setCarrinho(carrinho: ItemVendaModel[]){
    if (carrinho != null){
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }else{
      localStorage.removeItem('carrinho')
    }
  }

  addItemCarrinho(produto : produtoModel, quantidade: number){
    let item = new ItemVendaModel();

    item.produto = produto;
    item.quantidade = quantidade;

    //pegar intem do localStorage
    let carrinho = this.getCarrinho();

    //colocar novo item no final da Array
    carrinho.push(item);

    //atualiza o carrinho
    this.setCarrinho(carrinho);
  }
}
