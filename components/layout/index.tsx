import { Sidebar } from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    const {status} = useSession();

    if (status === "loading"){
        return (<div>Cargando...</div>);
    }

    if(status === "authenticated"){
        return(
            <main className="flex">
                <Sidebar />
                
                {children}
                <ToastContainer/>

            </main>
        );
    }
    return (<PublicLayout>{children}</PublicLayout>);

};

const PublicLayout = ({children}: EntradasLayout) =>{
    return(
        <main>{children}</main>
    );
}

export {Layout};