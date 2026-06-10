import './CadastroFilmes.css'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../Services/Services"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroFilme = () => {

    // States e variáveis 
    const [valor, setValor] = useState("")
    const [idGenero, setIdGenero] = useState("")
    const [editar, setEditar] = useState(false)
    const [listaFilmes, setListaFilmes] = useState([])
    const [listaGeneros, setListaGeneros] = useState([])
    const [idEditar, setIdEditar] = useState(0)

    // GET - Listar Gêneros
    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            setListaGeneros(retornoAPI.data);
        } catch (error) {
            Alerta({
                title: "Erro",
                text: "Problemas ao carregar os gêneros da API",
                icon: "error",
                confirmButtonText: "OK",
            });
            console.log(error);
        }
    };

    // GET - Listar Filmes
    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme");
            setListaFilmes(retornoAPI.data);
        } catch (error) {
            Alerta({
                title: "Cadastro de Filmes",
                text: "Problema ao carregar dados da API",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
    }

    // POST - Cadastrar Filme
    const cadastrarFilme = async (e) => {
        e.preventDefault()

        if (valor.trim().length === 0 || !idGenero) {
            Alerta({ title: "Aviso", text: "Preencha todos os campos!", icon: "warning" })
            return false;
        }

        try {
            // Enviando o corpo (payload) necessário para a API
            const retornoAPI = await api.post("/Filme", {
                titulo: valor,
                idGenero: parseInt(idGenero)
            })

            if (retornoAPI.status === 201 || retornoAPI.status === 200) {
                Alerta({ title: "Sucesso", text: 'Filme cadastrado com sucesso!', icon: "success" })
                limparFormulario()
                getFilmes()
            } else {
                Alerta({ title: "Erro", text: 'Erro ao cadastrar filme.', icon: "error" })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // PUT - Preparar a tela para edição
    // Recebe o objeto do filme vindo do clique da Lista
    const preEditar = (filme) => {
        setEditar(true)
        setIdEditar(filme.idFilme || filme.id)
        setValor(filme.titulo || filme.nome)
        setIdGenero(filme.idGenero || "")
    }

    // PUT - Salvar alteração do Filme
    const editarFilme = async (e) => {
        e.preventDefault()

        if (valor.trim().length === 0 || !idGenero) {
            Alerta({ title: "Aviso", text: "Preencha todos os campos!", icon: "warning" })
            return false;
        }

        try {
            const retornoAPI = await api.put(`/Filme/${idEditar}`, {
                idFilme: idEditar,
                titulo: valor,
                idGenero: parseInt(idGenero)
            })

            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                Alerta({ title: "Sucesso", text: "Filme atualizado com sucesso!", icon: "success" })
                limparFormulario()
                getFilmes()
            }
        } catch (error) {
            console.log(error)
            Alerta({ title: "Erro", text: "Erro ao atualizar o filme.", icon: "error" })
        }
    }

    // DELETE - Excluir Filme
    const excluirFilme = async (filme) => {
        const idExcluir = filme.idFilme || filme.id;
        
        try {
            const retornoAPI = await api.delete(`/Filme/${idExcluir}`)
            
            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                Alerta({ title: "Sucesso", text: "Filme excluído com sucesso!", icon: "success" })
                getFilmes()
            }
        } catch (error) {
            console.log(error)
            Alerta({ title: "Erro", text: "Erro ao excluir o filme.", icon: "error" })
        }
    }

    const limparFormulario = () => {
        setValor("")
        setIdGenero("")
        setIdEditar(0)
        setEditar(false)
    }

    useEffect(() => {
        getGeneros();
        getFilmes();
    }, [])

    return (
        <>
            <main>
                <Header />
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    valor={valor}
                    setValor={setValor}
                    idGenero={idGenero}
                    setIdGenero={setIdGenero}
                    btnEtitar={editar}
                    cancelarEdicao={limparFormulario}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme} 
                    funcEditar={preEditar}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme