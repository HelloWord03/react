import { conexion } from "../api/conexion";

const TarjetaPersonaje = ({ personaje }) => {
    // Si por alguna razón personaje es null/undefined, evitamos el error
    if (!personaje) return null;

    return (
        <div className="detalle-personaje">
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} style={{ width: '200px' }} />
            <p><strong>Especie:</strong> {personaje.race}</p>
            <p><strong>Género:</strong> {personaje.gender}</p>
        </div>
    );
}
export default TarjetaPersonaje;