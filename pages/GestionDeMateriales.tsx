import { BotonCrearMaterial } from "@/components/BotonCrearMaterial";
import { PrivateComponent } from "@/components/PrivateComponent";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetUsers } from "@/hooks/useGetUser";
import { Material } from "@prisma/client";
import { useState } from "react";

const GestionDeMateriales = () => {

  const { material, materialLoading } = useGetMaterials();

  //const { data, isLoading } = useSWR<Material[]>(API_ROUTES.getAllMaterial, fetcher);

  const [openCrearMaterial, setOpenCrearMaterial] = useState(false);

  const {user, userLoading} = useGetUsers();

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
              <th>Id Material</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Persona (User)</th>
            </tr>
          </thead>
          <tbody>

            {materialLoading === false &&
              material?.map((material: Material) => {
                return (
                  <tr key={material.id}>
                    <td>{material.id}</td>
                    <td>{material.name}</td>
                    <td>{material.quantity}</td>
                    <td>{userLoading ? ("Cargando...") : (user?.find(usuario => usuario.id === material.userId)?.name)}</td>
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