import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  
  produto: any;


  constructor(private guestService:GuestService) {
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

}
