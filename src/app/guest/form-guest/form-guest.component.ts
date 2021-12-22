import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.css']
})
export class FormGuestComponent implements OnInit {

  id: number = 0;

  meuFormuser: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    nascimento: new FormControl(),
    senha: new FormControl(),
    telefone: new FormControl(),
    confirmarSenha: new FormControl(),
    celular: new FormControl(),
    cpf: new FormControl(),
    // perfis: new FormControl(),
    endereco: new FormGroup(
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

  });

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe((parametros: any) => {
      console.log(parametros);
      //Edita
      if (parametros.id) {
        this.id = parametros.id;

        this.usuarioService.getOne(this.id).subscribe((resposta: any) => {
          console.log(resposta);

          this.meuFormuser.patchValue(resposta);
        });
      }
    });

    let contador = localStorage.getItem("contador");

    let jsonDoGuilherme = {
      nome: "Guilherme",
      sobrenome: "Pereira de Carvalho"
    }

    let jsonStr = JSON.stringify(jsonDoGuilherme);
    localStorage.setItem("json", jsonStr);

    let jsonValue = JSON.parse(jsonStr);
    console.log(jsonValue)

    if (contador == null) {
      localStorage.setItem("contador", "1");
    }
    else {
      let tmp = parseInt(contador);
      tmp++;
      localStorage.setItem("contador", tmp.toString());

    }

  }


  onSubmit() {
    console.log(this.meuFormuser.value)

    this.usuarioService.novoUsuario(this.meuFormuser.value)
      .subscribe(
        {
          next: (dados) => {
            console.log(dados);
            alert(`Cadastro realizado com sucesso!`);
            this.router.navigate(['/admin'])
          }
        }
      );

    if (this.id > 0) {
      this.usuarioService.update(this.id, this.meuFormuser.value).subscribe(
        (dados) => {
          console.log(dados);
          alert(` Atualizado com sucesso!`);
          this.meuFormuser.reset();
          this.router.navigate(['/listar-usuarios']);
        }
      );
    } else {
      this.usuarioService.novoUsuario(this.meuFormuser.value).subscribe(
        (resposta: any) => {
          alert(`Usuário cadastrado com sucesso!`);
          console.log(resposta);
          this.meuFormuser.reset();
        }
      );
    }
  }
}
