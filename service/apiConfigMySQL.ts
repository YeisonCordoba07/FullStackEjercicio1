const SERVER_URL = '/api';

const API_ROUTES = {
    getAllMovimientosInventario: `${SERVER_URL}/InventoryMovement`,
    getAllMaterial: `${SERVER_URL}/Material`,
    getAllUser: `${SERVER_URL}/User`,

    crearInventoryMovement: `${SERVER_URL}/crearInventoryMovement`,

    crearMaterial: `${SERVER_URL}/crearMaterial`,
    
    actualizarUsuario: `${SERVER_URL}/users`,
    
    roles:`${SERVER_URL}/Roles`,

    getUser:`${SERVER_URL}/users`,


};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};