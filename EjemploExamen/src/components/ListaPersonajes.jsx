import { useContext, useState, useEffect } from "react";
import { TarjetaContexto } from "../contexts/TarjetaContexto";
import '../css/style.css'
import Boton from "./Boton";
import { conexion } from "../api/conexion";
import {Link} from "react-router-dom";

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
    const ubicacion = () =>{
        <Link to='/favoritos'></Link>
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
                    <img src={personaje.image} alt={personaje.name} style={{width: 250, height:400, display:"block"}} />           
                    <Boton texto="Ver más" onClick={() => setTarjetaSeleccionada(personaje)} />
                    <Boton texto="Añadir a fav" onClick={() => setTarjetaSeleccionada(personaje) } />
                    
                </div>
            ))}             
        </div>
    );
}
export default ListaPersonajes;