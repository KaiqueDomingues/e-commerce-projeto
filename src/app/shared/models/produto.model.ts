import { CategoriaModel } from "./categoria.model";
import { imagemModel } from "./imagem.model";

export class produtoModel{

    idProduto : number;
    nome : string;
    preco : number;
    descricao : string;
    categorias : Array <CategoriaModel>;
    imagens : Array <imagemModel>;

}