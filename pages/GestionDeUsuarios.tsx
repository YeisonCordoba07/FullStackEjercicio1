import { AuxEditarUsuario } from "@/components/AuxEditarUsuario";
import { BotonEditarUsuario } from "@/components/BotonEditarUsuario";
import { API_ROUTES, fetcher } from "@/service/apiConfigMySQL";
import { User } from "@/types/types";
import { useState } from "react";
import useSWR from "swr";

const GestionDeUsuarios = () => {

    const { data, isLoading } = useSWR<User[]>(API_ROUTES.getAllUser, fetcher);

    const [openEditarUsuario, setOpenEditarUsurio] = useState(false);

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

      <BotonEditarUsuario open={openEditarUsuario} setOpen={setOpenEditarUsurio} user={data?.user[0]}/>

        </main>
    );
}

export default GestionDeUsuarios;