import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { DialogoMUI } from "@/components/DialogoMUI";
import { API_ROUTES } from "@/service/apiConfigMySQL";
import axios from "axios";
import { mutate } from "swr";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useSession } from "next-auth/react";
import { useGetUsers } from "@/hooks/useGetUser";


interface EntradasBotonCrearMovimiento {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}





const BotonCrearMovimiento = ({
    open,
    setOpen,
}: EntradasBotonCrearMovimiento) => {


    const { data } = useSession();
    const { materials } = useGetMaterials();

    const [nuevoMovimiento, setNuevoMovimiento] = useState({
        movementType: "",
        quantity: "",
        materialId: "",
        userId: "",
    });

    //const [editLoading, setEditLoading] = useState(false);

    const crearMovimiento = async (e: SyntheticEvent) => {
        e.preventDefault();

        const quantityNumero = parseInt(nuevoMovimiento.quantity, 10);

        try {
            await axios.request({
                method: "POST",
                url: `${API_ROUTES.crearInventoryMovement}`,
                data: {
                    ...nuevoMovimiento,
                    quantity: quantityNumero,
                    userId: data?.user.id,
                },
            });
            await mutate(API_ROUTES.crearInventoryMovement);
            //toast.success("Exito creando el usuario");
        } catch (error) {
            //toast.error("No se puedo crear el usuario");
        }
        setOpen(false);
    };





    return (
        <DialogoMUI
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            titulo={"Crear movimiento"}
        >
            <form
                action=""
                className="gap-3 flex flex-col"
                onSubmit={crearMovimiento}
            >
                <label htmlFor="material">
                    <span>Material</span>
                    <select
                        value={nuevoMovimiento.materialId}
                        name="material"
                        required
                        onChange={(e) => {
                            setNuevoMovimiento({
                                ...nuevoMovimiento,
                                materialId: e.target.value,
                            });
                        }}
                    >
                        <option disabled>Seleccione un material</option>
                        {materials?.map((material) => {
                            return (
                                <option value={material.id} key={material.id}>
                                    {material.name}
                                </option>
                            );
                        })}
                    </select>
                </label>

                <label htmlFor="cantidad">
                    <span>Cantidad</span>
                    <input
                        value={nuevoMovimiento.quantity}
                        name="cantidad"
                        type="number"
                        required
                        onChange={(e) => {
                            setNuevoMovimiento({
                                ...nuevoMovimiento,
                                quantity: e.target.value,
                            });
                        }}
                    />
                </label>

                <label htmlFor="tipo-movimiento">
                    <span>Tipo de movimiento</span>
                    <select
                        value={nuevoMovimiento.movementType}
                        name="tipo-movimiento"
                        required
                        onChange={(e) => {
                            setNuevoMovimiento({
                                ...nuevoMovimiento,
                                movementType: e.target.value,
                            });
                        }}
                    >
                        <option disabled>Seleccione un tipo</option>
                        <option value={"ENTRADA"}>ENTRADA</option>
                        <option value={"SALIDA"}>SALIDA</option>
                    </select>
                </label>

                <div className="flex gap-5 justify-center items-center">
                    <button
                        type="submit"
                        onClick={() => { }}
                        className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
                    >
                        Crear
                    </button>

                    <button
                        onClick={() => setOpen(false)}
                        className="bg-gray-500 p-3 rounded-lg text-white font-semibold hover:bg-gray-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </DialogoMUI>
    );
};

export { BotonCrearMovimiento };
