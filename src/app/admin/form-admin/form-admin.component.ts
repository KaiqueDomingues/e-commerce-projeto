import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarProdutosService } from 'src/app/shared/services/listar-produtos.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  id: number = 0;

  meuForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    preco: new FormControl(),
    descricao: new FormControl(),
    categorias: new FormControl(),
    imagem: new FormControl(),
  })

  http: any;
  categoriasSelect: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private listarcategorias: ListarProdutosService) { }

  ngOnInit(): void {
    this.getCategorias();

    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros)

          // Edição
          if (parametros.idProduto) {
            //atualizar o id a ser editado
            this.id = parametros.idProduto;

            this.adminService.getOne(parametros.idProduto)
              .subscribe(
                (resposta) => {
                  console.log(resposta)
                  this.meuForm.patchValue(resposta);
                }
              )
          }
          // Criação
          else {

          }
        }
      );
  }


  onSubmit(): void {
    //console.log(this.meuForm.value)
    //console.log(this.categoriasSelect)

    let index = this.categoriasSelect
      .findIndex((x: any) => x.idCategoria == this.meuForm.value.categorias);

    //console.log(index)
    //console.log([ this.categoriasSelect[index] ])
    this.meuForm.value.categorias = [this.categoriasSelect[index]];
    this.meuForm.value.imagens = [];
    //console.log(this.meuForm.value)

    this.adminService.save(this.meuForm.value)
      .subscribe(
        {
          next: (produto) => {
            console.log(produto)
          }
        }
      );

    if (this.id > 0) {
      this.adminService.update(this.id, this.meuForm.value)
        .subscribe(
          (dados) => {
            console.log(dados);
            this.router.navigate(['/admin'])
          }
        );
    }
    // quando é criação
    else {
      this.adminService.save(this.meuForm.value)
        .subscribe(
          {
            next: (respota) => { this.router.navigate(['/admin']) },
            error: (e) => { alert('Erro ao Salvar') },
            complete: () => { console.log('acabou') }
          }
        );
    }
  }

  private getCategorias() {
    this.adminService.getCategorias()
      .subscribe(
        {
          next: (categorias) => {
            this.categoriasSelect = categorias;
          }
        }
      );
  }

}