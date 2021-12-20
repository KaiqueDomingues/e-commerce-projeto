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

  onApagarClick(aluno: any){
    console.log(aluno)
    this.adminService.deletar(aluno.id)
      .subscribe(
        ()=> {
          let index = this.produtos.findIndex( (obj:any) =>  this.produtos.id == obj.id );
          this.produtos.splice(index,1);
          alert(`Aluno ${aluno.id} deletado com sucesso` );
        }
      );
  }

  retornarTodos(){
    this.adminService.getAll()
    .subscribe(
        (dados)=>{
          this.produtos = dados;
          //console.log(dados)
        }
      );
  }

}
