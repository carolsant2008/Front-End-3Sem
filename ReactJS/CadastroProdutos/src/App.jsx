
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastrofrutaPg from './pages/Cadastrofruta/cadastrofruta'
import CadastroProdutoPg from './pages/CadastroProduto/CadastroProduto'
import HomePg from './pages/home/homepage'
import QuemsomosPg from './pages/Quemsomos/Quemsomos'
import Header from './Components/Header/Header'

export default function App() {
  return(
  <>

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route element={<HomePg/>}path='/'/>
    <Route element={<QuemsomosPg/>}path='Quersomos'/>
    <Route element={<CadastroProdutoPg/>}path='/frutas'/>
    <Route element={<CadastrofrutaPg/>}path='/produtos'/>
  </Routes>
  </BrowserRouter>
    
    
   

</>
  )
}