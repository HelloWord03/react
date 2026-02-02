import { useContext, useState, useEffect } from "react";
import { TarjetaContexto } from "../contexts/TarjetaContexto";

import Boton from "./Boton";
import { conexion } from "../api/conexion";

const ListaPersonajes = () => {
    // Asegúrate de que personajes sea un array para evitar errores de .map()
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const { setTarjetaSeleccionada } = useContext(TarjetaContexto);
    useEffect(() => {
        const fetchPersonajes = async () => {
            try {   
                const response = await conexion.get("/");
                setPersonajes(response.data);
            } catch (error) {
                console.error("Error al obtener los personajes:", error);
            } finally {
                setCargando(false);
            }
        };
        fetchPersonajes();
    }, []);
    if (cargando) {
        return <div>Cargando personajes...</div>;
    }
    return (
        <div className="lista-contenedor">
            {personajes.map((personaje) => ( 
                <div 
                    key={personaje.id} // Mejor usar ID que index
                    className="tarjeta-personaje"
                    
                    role="button" // Ayuda a la accesibilidad
                    tabIndex="0"
                >
                    <h3>{personaje.name}</h3>           
                    <Boton texto="Ver más" onClick={() => setTarjetaSeleccionada(personaje)} />
                </div>
            ))}             
        </div>
    );
}
export default ListaPersonajes;