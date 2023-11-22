import { Sidebar } from "@/components/Sidebar";
import { dividerClasses } from "@mui/material";
import { useSession } from "next-auth/react";


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    const {data, status} = useSession();

    console.log("ROLE: ", data?.user.role);

    if (status === "loading"){
        return (<div>Cargando...</div>);
    }

    if(status === "authenticated"){
        return(
            <main className="flex">
                <Sidebar />
                {children}
                {/*<ToastContainer/>*/}
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