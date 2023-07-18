import CarrinhoModel from "@/model/Carrinho"
import CarrinhoItem from "./CarrinhoItem"
import { IconShoppingCart } from "@tabler/icons-react"
import { useState } from "react"
import Moeda from "@/utils/moeda"

interface CarrinhoProps {
    itens: CarrinhoModel[]
}

export default function Carrinho(props: CarrinhoProps) {

    const [aberta, setAberta] = useState<boolean>(false)
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)

    return (
        <div className="flex flex-col gap-1">
            <div>
                <button className="flex bg-blue-600 px-2 py-1 rounded-md" onClick={() => setAberta(!aberta)}>
                    <IconShoppingCart /> Carrinho
                </button>
            </div>
            {aberta &&
                <div className="bg-slate-700 flex flex-col rounded-md gap-2 p-2">
                    {props.itens.map((item, i) => {
                        return (
                            <CarrinhoItem key={i} {...item} />
                        )
                    })}
                    <div>
                        <span>Total: {Moeda.formatar(total)}</span>
                    </div>
                </div>
            }
        </div>
    )
}