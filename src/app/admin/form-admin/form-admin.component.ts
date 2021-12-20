import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  id :number = 0;

  meuForm : FormGroup = new FormGroup({
    nomeProduto: new FormControl(),
    valor: new FormControl(),
    descricao: new FormControl(),
    categoria: new FormControl(),
    imagem: new FormControl(),
  })

  http:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private fb : FormBuilder,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.meuForm = this.fb.group({
      nomeProduto : [[Validators.required]],
      valor: [[Validators.required]],
      descricao: [[Validators.required]],
      categoria: [[Validators.required]],
      imagem: [[Validators.required]],
    })
    ;

    this.activatedRoute.params
      .subscribe(
        (parametros : any)=>{
          console.log(parametros)

          // Edição
          if (parametros.id){
            //atualizar o id a ser editado
            this.id = parametros.id;

            this.adminService.getOne(parametros.id)
              .subscribe(
                (resposta)=>{
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

  getControl(control : string){
    return this.meuForm.get(control);
  }

  isValid(control :string){
    return (this.getControl(control)?.valid == false && this.getControl(control)?.touched)
  }

  onSubmit(){
 
    // quando é edição
    if (this.id > 0){
      this.adminService.update(this.id, this.meuForm.value)
      .subscribe(
        (dados) => {
          console.log(dados);
          this.router.navigate(['/alunos'])
        }
      );
    }
    // quando é criação
    else{
      this.adminService.salvar(this.meuForm.value)
      .subscribe(
        {
          next: (respota) => { this.router.navigate(['/alunos']) },
          error: (e) => { alert('Erro ao Salvar') },
          complete : () => { console.log('acabou')}
        }
      );
    }
  }
}


