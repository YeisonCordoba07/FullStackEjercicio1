import { BotonCrearMaterial } from "@/components/BotonCrearMaterial";
import { PrivateComponent } from "@/components/PrivateComponent";
import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";
import { Material } from "@/types/types";
import { useState } from "react";
import useSWR from "swr";

const GestionDeMateriales = () => {

  const { data, isLoading } = useSWR<Material[]>(API_ROUTES.getAllMaterial, fetcher);

  const [openCrearMaterial, setOpenCrearMaterial] = useState(false);

  return (
    <main className="flex p-10 flex-col items-center gap-10">

      <h1>Gestion De Materiales</h1>

      {/*boton */}
      <PrivateComponent roleName="ADMIN">
      <div className="flex justify-between">

          <button
            onClick={() => { setOpenCrearMaterial(true) }}
            className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200"
          >Crear Material</button>




      </div>
      </PrivateComponent>


      {/* TABLA */}
      <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Id M</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Persona</th>
            </tr>
          </thead>
          <tbody>

            {isLoading === false &&
              data?.material?.map((material) => {
                return (
                  <tr key={material.id}>
                    <td>{material.id}</td>
                    <td>{material.name}</td>
                    <td>{material.quantity}</td>
                    <td>{material.userId}</td>
                  </tr>
                );
              })}

          </tbody>
        </table>
      </section>
      <BotonCrearMaterial open={openCrearMaterial}
        setOpen={setOpenCrearMaterial} />

    </main>
  );
}

export default GestionDeMateriales;