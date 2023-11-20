const SERVER_URL = '/api';

const API_ROUTES = {
    getAllMovimientosInventario: `${SERVER_URL}/InventoryMovement`,
    getAllMaterial: `${SERVER_URL}/Material`,
    getAllUser: `${SERVER_URL}/User`,

    agregarMovimientoInventario: `${SERVER_URL}/createUser`,

    crearMaterial: `${SERVER_URL}/materials`,
    
    actualizarUsuario: `${SERVER_URL}/users`,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};