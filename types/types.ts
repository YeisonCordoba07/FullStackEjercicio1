import { Role } from "@prisma/client";

export interface InventoryMovement{
    id: string;
    movementType: string;
    quantity: number;
    userId: string;

}

export interface InventoryMovementQuery{
    movement: InventoryMovement[];
}

export interface Material{
    id: string;
    name: string;
    quantity: number;
    userId: string;
}

export interface MaterialQuery{
    material: Material[];
}

export interface User{
    id: string;
    emailVerified: Date;
    email: string;
    roleId: string;
}

export interface UserQuery{
    user: User[];
}

export interface RolesQuery {
    roles: Role[];
  }