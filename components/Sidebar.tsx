import { BotonEnlace } from "@/components/BotonEnlace";
import Image from "next/image";

const Sidebar = () =>{
    return(
        
        <div className="flex flex-col gap-10 bg-emerald-300 h-full w-96 p-5 relative z-20 after:absolute after:left-full after:top-0 after:z-10
        ">
        <div className="flex gap-4 flex-col items-center relative">
          <Image
            className="rounded-full"
            src="/cell.png"
            height={300}
            width={300}
            alt="Foto de perfil"
          />
          <h2>Nombre del usuario</h2>
        </div>

        <div className="gap-4 flex flex-col">
          <BotonEnlace href="#" titulo="Inventarios" />
          <BotonEnlace href="#" titulo="Materiales" />
          <BotonEnlace href="#" titulo="usuarios" />
        </div>

      </div>
        
    );
}

export {Sidebar};