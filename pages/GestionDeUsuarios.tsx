import { AuxEditarUsuario } from "@/components/AuxEditarUsuario";
import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";
import { User } from "@/types/types";

import useSWR from "swr";

const GestionDeUsuarios = () => {


    const { data, isLoading } = useSWR<User[]>(API_ROUTES.getAllUser, fetcher);


    return (
        <main className="flex p-10 flex-col items-center gap-10">

            <h1>Gestion De Usuarios</h1>

            {/*boton */}
            <div className="flex justify-between">

            </div>


            {/* TABLA */}
            <section className='flex justify-center'>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>Id Usuario</th>
              <th>Fecha creación</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>

            {isLoading === false &&
              data?.user?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.emailVerified}</td>
                    <td>{user.email}</td>
                    <td>{user.roleId}</td>
                    <td><AuxEditarUsuario user={user}/></td>
                  </tr>
                );
              })}

          </tbody>
        </table>
      </section>



        </main>
    );
}

export default GestionDeUsuarios;