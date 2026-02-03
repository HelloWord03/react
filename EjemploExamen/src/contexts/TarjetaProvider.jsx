import { TarjetaContexto } from "./TarjetaContexto";
import { createContext, useState } from "react";

const TarjetaProvider = ({children}) => {
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    const [favoritos, setFavoritos] = useState([]);
    const fav = (id) => {
        setFavoritos(prev => prev.includes(id)
            ? prev.filter(fav => fav !== id) : [...prev, id]);
    }
    return (
        <TarjetaContexto.Provider value={{tarjetaSeleccionada, setTarjetaSeleccionada, favoritos, fav}}>
            {children}
        </TarjetaContexto.Provider>
    )
}
export default TarjetaProvider;