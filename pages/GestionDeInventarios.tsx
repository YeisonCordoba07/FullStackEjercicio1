import { Material, InventoryMovement } from "@/types/types";
import useSWR from "swr";
import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";



//const isLoading = "";

const GestionDeInventarios = () => {
  const { data, isLoading } = useSWR<InventoryMovement[]>(API_ROUTES.getAllMovimientosInventario, fetcher);
  console.log(data);
  //const dataMovimiento = data;

  //const { data, isLoading } = useSWR<Material[]>(API_ROUTES.getAllMovimientosInventario, fetcher);

  //const dataMaterial = data;

  return (
    <main className="flex p-10 flex-col items-center gap-10">

      <h1>Gestion De Inventarios</h1>

      {/* Div para Selector y boton */}
      <div className="flex justify-between">

      </div>


      {/* TABLA */}
      <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Id M</th>
              <th>Fecha</th>
              <th>Numero entradas</th>
              <th>Numero salidas</th>
              <th>Persona</th>
            </tr>
          </thead>
          <tbody>

            {isLoading === false &&
              data?.movimiento?.map((movimiento) => {
                return (
                  <tr key={movimiento.id}>
                    <td>{movimiento.id}</td>
                    <td>{movimiento.id}</td>
                    <td>{movimiento.quantity}</td>
                    <td>{movimiento.userId}</td>
                    <td>{movimiento.userId}</td>
                  </tr>
                );
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
    </main>
  );
};

export default GestionDeInventarios;
