import React from 'react'
import TarjetaProvider from './contexts/TarjetaProvider'
import ListaPersonajes from './components/ListaPersonajes'
import TarjetaPersonaje from './components/TarjetaPersonaje'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './templates/Home'
import Detalles from './templates/Detalles'
import Favoritos from './templates/Favoritos'
import './App.css'

function App() {
    

  return (
    <TarjetaProvider>
      <h1>Aqui estamos</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/detalle/:id' element={<Detalles></Detalles>}></Route>
          <Route path='/favoritos' element={<Favoritos></Favoritos>}></Route>
        </Routes>
      </BrowserRouter> 
    </TarjetaProvider>
  )
}

export default App
