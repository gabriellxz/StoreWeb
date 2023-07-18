import produtos from "@/constants/ProdutosObj";
import ProdutoModel from "@/model/ProdutosModel";
import Moeda from "@/utils/moeda";
import { IconShoppingBag, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface Produto {
    produto: ProdutoModel
    addCarrinho: (produto: ProdutoModel) => void
}

export default function ProdutoItem(props: Produto) {
    return (
        <div className={`
            bg-gray-800 text-white
            p-3 rounded-xl flex flex-col gap-1
        `}>
            <div className="flex justify-center">
                <Image src={props.produto.imagemUrl} width={300} height={300} alt="image" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <div className={`
                    flex justify-between
                `}>
                    <div className="text-2xl font-black">
                        {props.produto.nome}
                    </div>
                    <div className="text-2xl text-green-600">
                        {Moeda.formatar(props.produto.preco)}
                    </div>
                </div>
                <div className={`
                    text-gray-400
                `}>
                    {props.produto.descricao}
                </div>
                <div className="flex justify-between gap-1">
                    <button className="flex button">
                        <IconShoppingBag />
                        comprar
                    </button>
                    <button className="flex button" onClick={() => props.addCarrinho(props.produto)}>
                        <IconShoppingCart /> adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}