import React from 'react'

const Boton = ({handlerBoton,texto,estado=false, estilo}) => {
  return (
    <button onClick={handlerBoton} disabled={estado} style={estilo}>{texto}</button>
  )
}

export default Boton