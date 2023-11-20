import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { DialogoMUI } from "@/components/DialogoMUI";
import { API_ROUTES } from "@/service/apiConfigMySQL";
import { mutate } from "swr";
import axios from "axios";

interface EntradasBotonCrearMaterial{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const BotonCrearMaterial = ({open, setOpen}:EntradasBotonCrearMaterial) => {

    
    const [nuevoMaterial, setNuevoMaterial] = useState({
        id: "",
        name: "",
        quantity: "",
        userId: "",
      });


    const crearMaterial = async (e: SyntheticEvent) =>{
        e.preventDefault();
        //console.log(nuevoUsuario);
    
        const quantityNumero = parseInt(nuevoMaterial.quantity, 10);

        try{
            await axios.request({
                method: "POST",
                url: `${API_ROUTES.crearMaterial}`,
                data:{...nuevoMaterial, quantity: quantityNumero},
            });
            await mutate(API_ROUTES.crearMaterial);
            //toast.success("Exito creando el usuario");
    
    
        }catch (error){
            //toast.error("No se puedo crear el usuario");
        }
        setOpen(false);
    };


    
    return(
        <DialogoMUI open={open} onClose={() => { setOpen(false) }} titulo={"Crear usuario"}>

        <form action="" className="gap-3 flex flex-col" onSubmit={crearMaterial}>

            <label htmlFor="">
                <span>Id Material</span>
                <input 
                value={nuevoMaterial.id} 
                onChange={(e) =>{
                    setNuevoMaterial({...nuevoMaterial, id: e.target.value})
                }} 
                name="id"
                type="text"
                placeholder="300" 
                required
                />
            </label>

            <label htmlFor="">
                <span>Nombre Material</span>
                <input 
                value={nuevoMaterial.name} 
                onChange={(e) =>{
                    setNuevoMaterial({...nuevoMaterial, name: e.target.value})
                }} 
                name="name"
                type="text"
                placeholder="Material 3" 
                required
                />
            </label>

            <label htmlFor="">
                <span>Cantidad</span>
                <input 
                value={nuevoMaterial.quantity} 
                onChange={(e) =>{
                    setNuevoMaterial({...nuevoMaterial, quantity: e.target.value})
                }} 
                name="quantity"
                type="text"
                placeholder="20" 
                required
                />
            </label>

            <label htmlFor="">
                <span>Creador</span>
                <input 
                value={nuevoMaterial.userId} 
                onChange={(e) =>{
                    setNuevoMaterial({...nuevoMaterial, userId: e.target.value})
                }} 
                name="userId"
                type="text"
                placeholder="1" 
                required
                />
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

export {BotonCrearMaterial};