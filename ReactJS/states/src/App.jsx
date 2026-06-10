import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador';
import Formulariostate from './components/Formulariostate/Formulariostate';
import CadFruta from './components/CadFruta/CadFruta';

function App() {
  // Variavel privada (objeto) so pode ser mudada pela funcao setTitulo 
  const [Titulo, setTitulo] = useState("Google");

  function mudartexto1() {
    setTitulo("Microsoft")
  }
  function mudartexto2() {
    setTitulo("Adenicon")
  }


  return (
    <>
      {/* <h1>minha pagina de {Titulo}</h1>
    <button onClick={mudartexto1}>mudar o texto</button>
    <br />
    <button onClick={mudartexto2}>Adenicon</button>

   <Contador/>
   <Formulariostate/> */}
      <CadFruta />
    </>
  );
}

export default App
