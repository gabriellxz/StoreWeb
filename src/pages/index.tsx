import Carrinho from "@/components/Carrinho/Carrinho";
import ListaProdutos from "@/components/Produtos/ListaProdutos";
import produtos from "@/constants/ProdutosObj";
import CarrinhoModel from "@/model/Carrinho";
import ProdutoModel from "@/model/ProdutosModel";
import { useState } from "react";

export default function Pagina() {

  const [itens, setItens] = useState<CarrinhoModel[]>([])

  function addProduto(produto: ProdutoModel) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto }
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
    setItens([...outrosItens, novoItem])
  }

  return (
    <div className="h-full">
      <header className={`
          w-full bg-gray-800
          text-white p-6
          flex justify-between items-center
          fixed top-0
        `}>
        <div className="logo">
          <h1 className="font-black text-2xl">Web <span className="text-green-500">Store</span></h1>
        </div>
        <div>
          <Carrinho itens={itens} />
        </div>
      </header>
      <div className="produtos">
        <ListaProdutos produto={produtos} addCarrinho={addProduto} gridCols={2} sm={3} md={4} lg={5} xl={5} xl2={6} />
      </div>
    </div>
  )
}
