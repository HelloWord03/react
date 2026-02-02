import React, { useContext } from 'react'
import Formulario2 from './Formulario2'
import ListaTareas2 from './ListaTareas2'
import { PrioridadContext } from '../contexts/prioridadContext'

const Programa2 = () => {
  const {priority,setPriority}= useContext(PrioridadContext);

  function cambioSel(ev){
    const valor=ev.target.value;
    setPriority(valor)
  }

  return ( 
    <>
        <select id="elegirprio" 
          value={priority} 
          onChange={cambioSel}>
            <option value={"Todas"}>Todas</option>
            <option value={"Alta"}>Alta</option>
            <option value={"Media"}>Media</option>
            <option value={"Baja"}>Baja</option>
        </select>
        <br />
        <Formulario2/>
        <ListaTareas2/>
    </>
  )
}

export default Programa2