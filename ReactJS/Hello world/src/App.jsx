import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title'
import Subtitle from './components/Subtitle/subtitle'

function App() {
  

  return (
    <>
    <Title texto="Primeiro titulo do meu App"/>
    <Subtitle texto="minha pagina bacana"/>
    </>
  )
}

export default App
