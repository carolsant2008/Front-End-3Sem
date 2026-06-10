import { useState } from "react"


function Contador() {
    const [contador, setContador] = useState(0)

    function incrementar() {
        if (contador < 10) {
            setContador(contador + 1)
        } else {
            setContador(0)
        }
    }
    function decrementar() {
        if (contador > 0) {
            setContador(contador - 1)
        } else {
            setContador(0)
        }
    }


    return (
        <div className="Contador">
            <h1 className="Contador__Title">Contador {contador}</h1>
            <button onClick={incrementar}>contar (++)</button>
            <button onClick={decrementar}>contar (--)</button>
        </div>
    )
}

export default Contador