import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios : any = [] ;
  dados: any;
  idEndereco: any;
  endereco: any = [];

  meuform: FormGroup = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      nascimento: new FormControl(),
      senha: new FormControl(),
      telefone:  new FormControl(),
      confirmarSenha : new FormControl(),
      celular:  new FormControl(),
      cpf:  new FormControl(),
      endereco : new FormGroup(
        {
          cep: new FormControl(),
          logradouro: new FormControl(),
          numero: new FormControl(),
          complemento: new FormControl(),
          cidade: new FormControl(),
          bairro: new FormControl(),
          estado: new FormControl()
        }
      ),
    
  })


  constructor(
    private adminService: AdminService,
    private http:HttpClient,          
  ) { }

  ngOnInit(): void {

    // let index = this.idEndereco
    //   .findIndex((x: any) => x.idEndereco == this.meuform.value.idEndereco);
    //   this.meuform.value.idEndereco = [this.idEndereco[index]];


    this.adminService.getUsuarios()
    .subscribe(
      
        (dados)=>{
          this.usuarios = dados;
        }
      );
  }

  onApagarClick(usuarios:any){
    this.adminService
    .deletar(usuarios.id)
    .subscribe(() =>{
      let index = this.usuarios.findIndex(
        (obj: any) => usuarios.id == obj.id
      );
      this.usuarios.splice(index,1);
      alert(`Usuario ${usuarios.id} deletado com sucesso!`);
      this.adminService
    })
  }
}
