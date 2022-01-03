import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/shared/models/categoria.model';
import { imagemModel } from 'src/app/shared/models/imagem.model';
import { ItemVendaModel } from 'src/app/shared/models/item-venda.model';
import { produtoModel } from 'src/app/shared/models/produto.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  
  itemVenda : ItemVendaModel[] = [];
  produtos : produtoModel[];
  all_produtos : produtoModel[];
  categorias : CategoriaModel[] = [];
  categoriaSelected : number = -1;
  imagens: imagemModel [] = [];

  constructor(
    private guestService : GuestService ,
    private storageService: StorageService,
    ) { }

  ngOnInit(): void {
    this.getAllProdutos();
    this.getAllCategorias();
    this.getAllImagens();
  }

  onQuantidadeChange(produto : produtoModel , event: any){
    console.log(event.target.value)

    let ivm : ItemVendaModel = new ItemVendaModel();

    ivm.produto = produto;
    ivm.quantidade = event.target.value;

    let index = this.itemVenda
      .findIndex( 
        (x:ItemVendaModel) => x.produto.idProduto == produto.idProduto 
      );
      
    if (index >=0 ){
      this.itemVenda[index].quantidade = event.target.value;
    }
    else {
      this.itemVenda.push(ivm);
    }

    console.log(this.itemVenda);
  }

  finalizarCompra(){
    this.storageService.setCarrinho(this.itemVenda);
  }

  

  onCategoriaChange(){
    //console.log(this.categoriaSelected)
    this.produtos = this.all_produtos;
    if (this.categoriaSelected >= 0)
      this.produtos = this.produtos.filter( (x) => this.hasCategoria(x.categorias, this.categoriaSelected ) >= 0  );
  }

  private hasCategoria(categorias : CategoriaModel[], categoria_sel_id : number){
    let index = categorias.findIndex( (y) => y.idCategoria == categoria_sel_id );
    //console.log(index)
    return index;
  }

  private getAllProdutos(){
    this.guestService.getAll()
      .subscribe(
        {
          next : (produtos : any) => {
            this.produtos = produtos;
            this.all_produtos = produtos;
          }
        }
      );
  }

  private getAllCategorias(){
    this.guestService.getCategorias()
      .subscribe(
        {
          next : (categorias : any) => {this.categorias = categorias;}
        }
      );
  }

  private getAllImagens(){
    this.guestService.getImagens()
      .subscribe(
        {
          next : (imagens : any) => {this.imagens = imagens;}
        }
      );
  }


}