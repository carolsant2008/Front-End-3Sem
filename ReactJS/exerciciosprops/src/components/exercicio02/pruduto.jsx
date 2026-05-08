import "./produto.css"

function Produto({ nome, preco, descricao }) {
    return (
        <p className="card-produto">
            <span className="carde-produto__line"
            >
                Nome do produto: {nome}
                Preco: $ {preco}
                Descricao do produto: {descricao}

            </span>
            <span className="carde-produto__line"
            >
                Nome do produto: {nome}
                Preco: $ {preco}
                Descricao do produto: {descricao}

            </span>
            <span className="carde-produto__line"
            >  Nome do produto: {nome}
                Preco: $ {preco}
                Descricao do produto: {descricao}

            </span>

        </p>
    )
}

export default Produto