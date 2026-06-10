import { use, useState } from "react"
function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setquantidade] = useState("")

    //arrey para o cadastro de frutas

    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 4 },
        { id: 2, nome: "Manga", quantidade: 5 }
    ])

    function cadastrar(e) {
        e.preventDefault()//nao ta mais postando o formulario
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
        setFruta("")
        setquantidade(0)
    }

    // function limparCampos() {
    //     setFruta("")
    //     setquantidade(0)
    // }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>
            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">
                        Digite o nome da fruta
                    </label>

                    <label htmlFor="quantidade" className="cadastro__rotulo">
                        Digite a quantidade de frutas
                    </label>
                </fieldset>
                <input
                    type="text"
                    id="fruta"
                    value={fruta}
                    placeholder="ex: Morango"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />
                <input
                    type="number"
                    id="quantidade"
                    value={quantidade}
                    placeholder="Quantidade"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setquantidade(e.target.value)
                    }}
                />
                <button
                    type="submit"
                    className="cadastro__btncadastrar"
                    onClick={cadastrar}
                >Cadastrar
                </button>
            </form>
            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return <li key={f.id}>
                                Fruta: <strong>{f.nome}</strong>     |    Quantidade: <strong>{f.quantidade}</strong>
                            </li>
                        })
                    }

                </ul>
            </div>
        </section>
    )
}

export default CadFruta