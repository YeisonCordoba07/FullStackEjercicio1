import { InventoryMovement, Material, Role, User } from "@prisma/client";



export interface InventoryMovementQuery{
    movement: InventoryMovement[];
}


export interface MaterialQuery{
    material: Material[];
}



export interface UserQuery{
    user: User[];
}

export interface RolesQuery {
    roles: Role[];
  }