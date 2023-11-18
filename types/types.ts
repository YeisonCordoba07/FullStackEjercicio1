export interface MovimientoInventario{
    id: string;
    movementType: string;
    quantity: number;
    userId: string;

}

export interface MovimientoInventarioQuery{
    movimiento: MovimientoInventario[];
}

export interface Material{
    id: string;
    name: string;
    quantity: number;
    userId: string;
}

export interface MovimientosInventario{
    id: string;
    emailVerified: Date;
    email: number;
    roleId: string;
}