import { Component, OnInit } from '@angular/core';
import { ItemVendaModel } from 'src/app/shared/models/item-venda.model';
import { produtoModel } from 'src/app/shared/models/produto.model';
import { ListarProdutosService } from 'src/app/shared/services/listar-produtos.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  
  itemVenda: ItemVendaModel[] = [];
  produto: any;


  constructor(private guestService:GuestService,
    private sharedModule: ListarProdutosService,
    private storageService: StorageService) {
   }

  ngOnInit(): void {
    this.retornarTodos();
  }

  retornarTodos(){
    this.guestService.getAll()
    .subscribe(
        (dados)=>{
          this.produto = dados;
          //console.log(dados)
        }
      );
  }

  onQuantidadeChange(produto : produtoModel, event: any){
    console.log(event.target.value)

    let ivm: ItemVendaModel = new ItemVendaModel();

    ivm.produto = produto;
    ivm.quantidade = event.target.value;

    let index = this.itemVenda
    .findIndex((x:ItemVendaModel) => x.produto.idProduto  == produto.idProduto
    );

    if(index >= 0){
      this.itemVenda[index].quantidade = event.target.value;
    }else{
      this.itemVenda.push(ivm);
    }

    
    console.log(this.itemVenda)
  }

  finalizarCompra(){
    this.storageService.setCarrinho(this.itemVenda);
  }

}
