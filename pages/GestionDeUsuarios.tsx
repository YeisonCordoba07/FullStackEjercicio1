import { AuxEditarUsuario } from "@/components/AuxEditarUsuario";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useGetRoles } from "@/hooks/useGetRole";
import { useGetUsers } from "@/hooks/useGetUser";
import { User } from "@prisma/client";






const GestionDeUsuarios = () => {


    //const { data, isLoading } = useSWR<User[]>(API_ROUTES.getAllUser, fetcher);
    const {user, userLoading} = useGetUsers();
    const {roles} = useGetRoles();


    return (

      <ProtectedRoute roleName="ADMIN">
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

            {userLoading === false &&
              user?.map((user: User) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.emailVerified ? new Date(user.emailVerified).toLocaleString() : "N/A"}</td>
                    <td>{user.email}</td>
                    <td>{roles?.find((el) => el.id === user.roleId)?.name ?? ''}</td>
                    <td><AuxEditarUsuario user={user}/></td>
                  </tr>
                );
              })}

          </tbody>
        </table>
      </section>



        </main>
        </ProtectedRoute>
    );
}

export default GestionDeUsuarios;