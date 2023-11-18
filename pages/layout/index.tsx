import { Sidebar } from "@/components/Sidebar";


interface EntradasLayout{
    children: React.ReactNode;
}

const Layout = ({children}:EntradasLayout) => {
    return(
        <main className="flex">
            <Sidebar />
            {children}
            {/*<ToastContainer/>*/}
        </main>
    );
};

export {Layout};