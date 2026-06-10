import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"
const Header = () => {
    const { usuario, setUsuario} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }
    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/perfil"}>Perfil</Link>{" "}
                <Link to={"/MyPage"}>MyPage</ Link>{" "}
                <Link to={"/CadastrarProduto"}>Cadastro Produto</ Link>{" "}
                <span>({usuario})</span>

                <button onClick={
                    () => { setUsuario(null) }
                }>Sair
                </button>
            </nav>
        </header>
    )
}

export default Header