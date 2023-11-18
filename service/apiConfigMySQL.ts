const SERVER_URL = 'http://localhost:8080/api';

const API_ROUTES = {
    getAllMovimientosInventario: `${SERVER_URL}/InventoryMovement/findAll`,
    getAllMaterial: `${SERVER_URL}/Material?select=*`,
    getAllUsuarios: `${SERVER_URL}/User?select=*`,

    agregarMovimientoInventario: `${SERVER_URL}/createUser`,

    agregarMaterial: `${SERVER_URL}/createUser`,
    
    actualizarUsuario: `${SERVER_URL}/createUser`,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};