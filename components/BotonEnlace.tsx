import Link from "next/link";

interface EntradasNavegacion{
    titulo: string;
    href: string;
}


const BotonEnlace = ({titulo, href}:EntradasNavegacion) => {
    return(
        <Link href={href} className="hover:text-blue-500 bg-slate-200 rounded-xl shadow-xl hover:scale-105 flex flex-col justify-center items-center p-3">
            <span className="text-xl">{titulo}</span>
        </Link>
    )
};

export {BotonEnlace};