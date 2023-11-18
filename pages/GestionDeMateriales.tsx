import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";
import { Material } from "@/types/types";
import useSWR from "swr";

const GestionDeMateriales = () => {

    const { data, isLoading } = useSWR<Material[]>(API_ROUTES.getAllMaterial, fetcher);



    return (
        <main className="flex p-10 flex-col items-center gap-10">

            <h1>Gestion De Materiales</h1>

            {/*boton */}
            <div className="flex justify-between">

            </div>


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

        </main>
    );
}

export default GestionDeMateriales;