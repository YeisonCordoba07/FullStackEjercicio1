import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { DialogoMUI } from "@/components/DialogoMUI";
import { API_ROUTES } from "@/service/apiConfigMySQL";
import { mutate } from "swr";
import axios from "axios";
import { User } from "@/types/types";

interface EntradasBotonEditarUsuario {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    user: User;
}

const BotonEditarUsuario = ({ open, setOpen, user }: EntradasBotonEditarUsuario) => {

    console.log("Usuario editar", user);

    const [informacionUsuario, setInformacionUsuario] = useState({
        email: "",
        roleId: "",
    });

    //const [editLoading, setEditLoading] = useState(false);

    const actualizarUsuario = async (e: SyntheticEvent) => {
        e.preventDefault();
        //console.log(nuevoUsuario);
        //setEditLoading(true);

            try {
                await axios.request({
                    method: "PUT",
                    url: `${API_ROUTES.actualizarUsuario}/${user.id}`,
                    data: { email: informacionUsuario.email, roleId: informacionUsuario.roleId },
                });
                //await mutate(API_ROUTES.actualizarUsuario);// REVISAR
                //toast.success("Exito actualizando el usuario");


            } catch (error) {
                //toast.error("No se puedo crear el usuario");
            }
        

        setOpen(false);
        //setEditLoading(false);
    };



    return (
        <DialogoMUI open={open} onClose={() => { setOpen(false) }} titulo={"Crear usuario"}>

            <form action="" className="gap-3 flex flex-col" onSubmit={actualizarUsuario}>

                <label htmlFor="correo-usuario">
                    <span>Correo usuario</span>
                    <input
                        value={informacionUsuario.email}
                        name="correo-usuario"
                        type="email"
                        placeholder={user.email}
                        required
                        onChange={(e) => {
                            setInformacionUsuario({ ...informacionUsuario, email: e.target.value })
                        }}
                    />
                </label>

                <label htmlFor="rol-usuario">
                    <span>Nombre Material</span>
                    <select
                        value={informacionUsuario.roleId}
                        name="rol-usuario"
                        required
                        onChange={(e) => {
                            setInformacionUsuario({ ...informacionUsuario, roleId: e.target.value })
                        }}
                    >
                        <option disabled>Seleccione un rol</option>
                        {/*roles?.map((role) => {
                            return (
                                <option value={role.id} key={role.id}>
                                    {role.name}
                                </option>
                            );
                        })*/}

                        <option value={1} >
                            ADMIN
                        </option>
                        <option value={2} >
                            USER
                        </option>
                    </select>
                </label>


                <div className="flex gap-5 justify-center items-center">
                    <button type="submit"
                        onClick={() => { }} className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
                        Guardar
                    </button>


                    <button
                        onClick={() => setOpen(false)}
                        className="bg-gray-500 p-3 rounded-lg text-white font-semibold hover:bg-gray-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
                        Cancelar
                    </button>
                </div>

            </form>
        </DialogoMUI>

    );
}

export { BotonEditarUsuario };