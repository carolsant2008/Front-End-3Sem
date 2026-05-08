import './produtos.css'
export default function Produtos({}){
    const produtos = [
        {
            nome: "Tenis de marca",
            preco: 520,
            descricao: "Tenis chique!!"
        },
        {
            nome: "chinelo havaianas",
            preco: 50,
            descricao: "Havaians !!"
        },
        {
            nome: " Cropped manga longa ",
            preco: 120,
            descricao: "Cropped manga longa das costas abertas !!"
        }
    ]

    return(
        produtos.map((produtinho) => {
            return(
                <Produto
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricao={produtinho.descricao}
                />
            )
        })
    )
}