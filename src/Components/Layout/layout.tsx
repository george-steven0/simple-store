import Navbar from "./Header/Navbar/navbar";

const Layout = ({children}:{children:JSX.Element}) => {
    
    return ( 
        <div className="layout-wrapper h-screen">
            <Navbar />
            <main className="mt-14 md:mt-1">
                {children}
            </main>
        </div>
    );
}

export default Layout;