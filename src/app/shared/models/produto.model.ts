import { CategoriaModel } from "./categoria.model";
import { ImagemModel } from "./imagens.model";

export class produtoModel{

    idProduto : number;
    nome : string;
    preco : number;
    descricao : string;
    categorias : Array <CategoriaModel>;
    imagens : Array <ImagemModel>;

}