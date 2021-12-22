import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produtos: any;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.retornarTodos();
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

}
