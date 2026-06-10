import { useState } from "react"
import { ProdutoContext } from "./UsuarioContext"

const ProdutoProvider = ({ children }) => {
    const [produto, SetProduto] = useState(ProdutoContext)
    // const [usuario, setUsuario] = useState([])
    return (
        <ProdutoContext.Provider
            value={{
                produto,
                SetProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}


export default ProdutoProvider