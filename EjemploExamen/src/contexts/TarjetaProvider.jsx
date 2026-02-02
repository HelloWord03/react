import { TarjetaContexto } from "./TarjetaContexto";
import { createContext, useState } from "react";

const TarjetaProvider = ({children}) => {
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    return (
        <TarjetaContexto.Provider value={{tarjetaSeleccionada, setTarjetaSeleccionada}}>
            {children}
        </TarjetaContexto.Provider>
    )
}
export default TarjetaProvider;