import produtos from "@/constants/ProdutosObj"
import ProdutoModel from "@/model/ProdutosModel"
import ProdutoItem from "./ProdutoItem"

interface ProdutosLista {
    produto: ProdutoModel[]
    addCarrinho: (produto: ProdutoModel) => void

    gridCols: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xl2?: number;
}

export default function ListaProdutos(props: ProdutosLista) {

    return(
        <div className={`
            grid
            grid-cols-${props.gridCols}
            ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
            ${props.md ? `md:grid-cols-${props.md}` : ''}
            ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
            ${props.xl ? `xl:grid-cols-${props.xl}` : ''}
            ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ''}
            flex gap-2
            m-2
        `}>
            {
                props.produto.map(produtos => {
                    return(
                        <ProdutoItem key={produtos.id} produto={produtos} addCarrinho={props.addCarrinho}/>
                    )
                })
            }
        </div>
    )
}