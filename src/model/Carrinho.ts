import ProdutoModel from "./ProdutosModel";

export default interface CarrinhoModel {
    quantidade: number;
    produto: ProdutoModel;
}