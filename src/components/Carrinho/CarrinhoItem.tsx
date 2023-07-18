import CarrinhoModel from "@/model/Carrinho";
import Moeda from "@/utils/moeda";

export default function CarrinhoItem(props: CarrinhoModel) {
    return (
        <div className="flex gap-1 items-center">
            <span className={`
                w-4 h-4 flex justify-center items-center 
                text-sm rounded-full bg-blue-800
            `}>{props.quantidade}</span>
            <span>{props.produto.nome}</span>
            <span>{Moeda.formatar(props.produto.preco)}</span>
        </div>
    )
}