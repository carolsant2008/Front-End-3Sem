import { useState } from "react";

function Formulariostate() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")

    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value)
    }
    return (
        <div>
            <h2>Formulario com State</h2>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(evento) => {
                    //evento = evento capeturado/disparado, no caso chenge
                    //target - elemento que disparou o evento, no caso o input
                    // value - oras, o value do input, no caso o valor digitado
                    setNome(evento.target.value)
                }}
            />
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
                type="text"
                placeholder="Digite seu sobrenome"
                onChange={(pegarSobrenome)}
            />
            <br />
            <label htmlFor="">Texto Digitado: <strong>{nome} {sobrenome}</strong></label>
        </div>
    );
}

export default Formulariostate