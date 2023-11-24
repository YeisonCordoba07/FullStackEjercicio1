import useSWR from "swr";
import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";
import { InventoryMovement, Material } from "@prisma/client";
import { useGetUsers } from "@/hooks/useGetUser";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { BotonCrearMovimiento } from "@/components/BotonCrearMovimiento";
import { useState } from "react";



//const isLoading = "";

const GestionDeInventarios = () => {
  const { data, isLoading } = useSWR<InventoryMovement[]>(API_ROUTES.getAllMovimientosInventario, fetcher);

  const { user, userLoading } = useGetUsers();
  const { materials, materialsLoading } = useGetMaterials();
  const [openCrearMovimiento, setOpenCrearMovimiento] = useState(false);

  const [materialActual, setMaterialActual] = useState("");

  return (
    <main className="flex p-10 flex-col items-center gap-10">

      <h1>Gestion De Inventarios</h1>

      {/* Div para Selector y boton */}
      <div className="flex justify-between w-full">
        <label htmlFor="seleccionar-material">
          <span>Nombre Material</span>
          <select
            value={materialActual}
            name="rol-usuario"
            required
            onChange={(e) => {
              setMaterialActual(e.target.value)
          }}
          >
            <option disabled>Seleccione un rol</option>
            {materials?.map((material) => {
              return (
                <option value={material.id} key={material.id}>
                  {material.name}
                </option>
              );
            })}


          </select>
        </label>

        <button
            onClick={() => {setOpenCrearMovimiento(true) }}
            className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
          >Crear Movimiento</button>

      </div>


      {/* TABLA */}
      <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Id Movimiento (inv)</th>
              <th>Fecha (material)</th>
              <th>Numero entradas (inv)</th>
              <th>Numero salidas</th>
              <th>Persona (user)</th>
            </tr>
          </thead>
          <tbody>

            {isLoading === false &&
              data?.movimiento?.map((movimiento: InventoryMovement) => {
                if(materialActual === movimiento.materialId){
                                  return (
                  <tr key={movimiento.id}>
                    <td>{movimiento.id}</td>
                    <td>{materialsLoading ? ("Cargando...") : (materials?.find(material => material.id === movimiento.materialId)?.updatedAt.toString()) ?? ""}</td>
                    {movimiento.movementType==="ENTRADA" ? (<><td>{movimiento.quantity}</td>
                    <td>-</td></>) : (<><td>-</td>
                    <td>{movimiento.quantity}</td></>)}
                    <td>{userLoading ? ("Cargando...") : (user?.find(user => user.id === movimiento.userId)?.name)}</td>
                  </tr>
                );
                }

              })}

          </tbody>
        </table>
      </section>


      <div className="flex flex-col gap-10">
        <div>
          <h2>25 unidades</h2>
          <span>Saldo actual</span>
        </div>


        {/* GRAFICA */}



      </div>
      <BotonCrearMovimiento open={openCrearMovimiento} setOpen={setOpenCrearMovimiento}/>
    </main>
  );
};

export default GestionDeInventarios;
