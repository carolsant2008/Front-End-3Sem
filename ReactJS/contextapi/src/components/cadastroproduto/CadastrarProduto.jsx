import { useContext } from "react"

const CadastrarProduto = () => {
    const { produto, setProduto } = useContext(ProdutoContext )
    const[novoProduto, setNovoProduto] = useState("")
    return (
        <>
            <h2>Cadastrar Produto</h2>
            <span>Produto: {produto}</span>
            <p>
                <input type="text"
                 placeholder="Novo Produto" 
                 value={novoProduto}
                 onChange={(e) => {
                    setNovoProduto(e.target.value)
                 }}
                 />
                <button onClick={
                    () => { setProduto(novoProduto) }
                }>Cadastrar
                </button>
            </p>
        </>
    )
}

export default CadastrarProduto