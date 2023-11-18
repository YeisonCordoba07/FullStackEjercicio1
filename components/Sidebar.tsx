import { BotonEnlace } from "@/components/BotonEnlace";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-96 relative h-screen bg-emerald-500">
      <div className="fixed bg-emerald-300 flex justify-center  flex-col left-0 p-5 w-96 h-screen gap-10">
        
        {/* Div para Imagenes y texto */}
        <div className="flex gap-4 flex-col items-center  justify-center">
          <Image
            className="rounded-full"
            src="/cell2.jpg"
            height={300}
            width={300}
            alt="Foto de perfil"
          />
          <h2>Nombre del usuario</h2>
        </div>

        {/* Div para Botones  */}
        <div className="gap-4 flex flex-col w-full">
          <BotonEnlace href="#" titulo="Inventarios" />
          <BotonEnlace href="#" titulo="Materiales" />
          <BotonEnlace href="#" titulo="usuarios" />
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
