import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/models/categoria.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produtos: any;
  categorias : CategoriaModel[] = [];

  constructor(
    private adminService:AdminService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.retornarTodos();
    this.getAllCategorias();
  }

  onApagarClick(produto: any){
    console.log(produto)
    this.adminService.deletar(produto.idProduto)
      .subscribe(
        ()=> {
          let index = this.produtos.findIndex( (obj:any) =>  this.produtos.idProduto == obj.id );
          this.produtos.splice(index,1);
          alert(`Produto ${produto.idProduto} deletado com sucesso` );
        }
      );
  }

  retornarTodos(){
    this.adminService.getAll()
    .subscribe(
        (dados)=>{
          this.produtos = dados;
        }
      );
  }

  private getAllCategorias(){
    this.adminService.getCategorias()
      .subscribe(
        {
          next : (categorias : any) => {this.categorias = categorias;}
        }
      );
  }

}
