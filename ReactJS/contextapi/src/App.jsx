import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Perfil from './components/perfil/Perfil'
import Home from './components/home/Home'
import MyPage from './components/mypage/MyPage'
import Header from './components/header/Header'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          
          <Route path='/MyPage' element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App