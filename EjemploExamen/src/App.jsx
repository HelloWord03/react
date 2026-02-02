import React from 'react'
import TarjetaProvider from './contexts/TarjetaProvider'
import ListaPersonajes from './components/ListaPersonajes'
import TarjetaPersonaje from './components/TarjetaPersonaje'
import { useState } from 'react'
import Boton from './components/Boton'
import './App.css'

function App() {
    

  return (
    <TarjetaProvider>
      <h1>Aqui estamos</h1>
      <ListaPersonajes />
      <TarjetaPersonaje />
    </TarjetaProvider>
  )
}

export default App
