import axios from "axios"

// Ejemplo con fetch
export const conexion = {
    get: async () => {
        const respuesta = await fetch('https://dragonball-api.com/api/characters');
        const datos = await respuesta.json();
        // Ajustamos según la estructura de la API (a veces es .items o .data)
        return { data: datos.items || datos }; 
    }
}