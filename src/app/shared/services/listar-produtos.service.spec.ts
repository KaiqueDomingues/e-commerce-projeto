import { TestBed } from '@angular/core/testing';

import { ListarProdutosService } from './listar-produtos.service';

describe('ListarProdutosService', () => {
  let service: ListarProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
