import { useSession, signIn } from "next-auth/react";


const Home = () => {
  const { status } = useSession();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1>Gestion de inventario</h1>
      {status === "authenticated" ? (
        <div>Bienvenidos</div>

      ) : (

        <div>
          <button 
            onClick={() => { signIn("auth0")}} className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-xl hover:scale-110 disabled:bg-gray-200">
            Iniciar sesión
          </button>

        </div>
      )}

    </main>
  );
};

export default Home;
