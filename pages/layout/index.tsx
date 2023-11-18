import { Sidebar } from "@/components/Sidebar";


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    return(
        <main>
            <Sidebar />
            {children}
            {/*<ToastContainer/>*/}
        </main>
    );
};

export {Layout};